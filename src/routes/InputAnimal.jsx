import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { v4 as uuid } from "uuid";

function InputAnimal(){

    const firebaseConfig = {
        apiKey: "AIzaSyAm__WIbWXj6okAN5J2xiOgywbGOyOavy0",
        authDomain: "animal-shelter-de082.firebaseapp.com",
        databaseURL: "https://animal-shelter-de082-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "animal-shelter-de082",
        storageBucket: "animal-shelter-de082.appspot.com",
        messagingSenderId: "293489147598",
        appId: "1:293489147598:web:8f118bbe193cd78e6e9a9f",
        measurementId: "G-JN476028EL"
    };
    
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    const uniqueId = uuid()
    
    function writeToDatabase(animalId, animalName, animalDescription, animalSpecies, animalPicture){
        set(ref(db, "animals/" + animalId), {
            id: animalId,
            name: animalName,
            description: animalDescription,
            species: animalSpecies,
            adopted: false,
            picture: animalPicture
        })
        uniqueId = uuid()
    }

    const [formData, setFormData] = useState({
        id: uniqueId,
        name: "",
        description: "",
        adopted: false,
        species: "",
        picture: ""
    })

    const inputChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
        console.log(formData)
    }

    const animalTypes = ["Pas", "Mačka", "Kornjača", "Konj"]

    return(
        <>
        <Navbar />
        <form className="bg-gray-300 w-[60%] rounded-md mx-auto mt-5 mb-5 flex justify-between">
            <div className="w-[100%]">
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Ime</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 ml-5" placeholder="Ime životinje" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Opis</label>
                    <textarea id="description" name="description" type="text" rows="4" value={formData.description} onChange={inputChange} className="block p-2.5 w-[50%] ml-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Kratki opis o životinji..."></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="species" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Vrsta životinje</label>
                    <select id="species" name="species" value={formData.species} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] ml-5 p-2.5">
                    <option defaultValue={"Izaberi vrstu"}>Izaberi vrstu</option>
                    {animalTypes.map(el => (
                        <option value={el}>{el}</option>
                    ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="picture" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Slika</label>
                    <input type="text" name="picture" value={formData.picture} id="picture" onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 ml-5" placeholder="url (https://slika.jpg)" required />
                </div>
                <button type="button" onClick={() => writeToDatabase(uniqueId, formData.name, formData.description, formData.species, formData.picture)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-l w-full sm:w-auto px-5 py-2.5 mb-5 mt-2 ml-5 text-center">Dodaj</button>
            </div>
        </form>
        <Footer />
        </>
    )
}

export default InputAnimal