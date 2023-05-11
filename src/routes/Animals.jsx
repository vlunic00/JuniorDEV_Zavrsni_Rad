import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi"
import AnimalCard from "../components/AnimalCard";
import Overlay from "../components/Overlay";
import AnimalModal from "../components/AnimalModal";
import { v4 as uuid } from "uuid";

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

function writeToDatabase(animalId, animalName, animalSpecies, adoptedStatus, descriptionMessage, imageUrl){
    const reference = ref(db, 'animals/' + animalId)

    set(reference, {
        id: animalId,
        name: animalName,
        species: animalSpecies,
        adopted: adoptedStatus,
        description: descriptionMessage,
        picture: imageUrl
    })
}



function Animals({ changeRole }){
    const [selectedAnimalData, setSelectedAnimalData] = useState({
        id: "",
        name: "",
        species: "",
        adopted: "",
        description: "",
        picture: ""
    })

    const [animalArray, setAnimalArray] = useState([])
    const [animalData, setAnimalData] = useState({})
    const [filterBy, setFilterBy] = useState("")
    const [radioId, setRadioId] = useState("")

    function changeFilter(species, id){
        setFilterBy(species)
        setRadioId(id)
    }

    function closeFilter(id){
        console.log(id)
        let radio = document.getElementById(id)
        radio.checked = false;
        setFilterBy("")
    }

    
    useEffect(() => {
        onValue(ref(db, "animals"), snapshot => {
        const tempData = snapshot.val()
        setAnimalData(tempData)
    })
},[])

     useEffect(() => {
        Object.keys(animalData).map(el => {
            setAnimalArray(current => [...current, animalData[el]])
        })
    }, [animalData])

    const [isOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    function fetchSelectedAnimal(animalId, animalName, animalDescription, animalAdopted, animalSpecies, animalPicture){
        setSelectedAnimalData({
            id: animalId,
            name: animalName,
            description: animalDescription,
            adopted: animalAdopted,
            species: animalSpecies,
            picture: animalPicture
        }
        )
    }

    if(animalArray.length == 0){
        return(
            <>
                <Navbar changeRole={changeRole}/>
                <div>
                    <h1 className="font-bold text-white text-6xl">Loading...</h1>
                </div>
                <Footer />
            </>
        )
    }
    else{
        return (
            <>
            <Navbar changeRole={changeRole}/>   
            <h2 className="text-white text-3xl font-bold mt-4 ml-4">Filter:</h2>     
            <div className="flex mt-4">
                <div className="flex items-center mr-4">
                    <input id="dog" type="radio" value="pas" onChange={() => changeFilter("pas", "dog")} name="species" className="w-6 h-6 ml-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="dog" className="ml-2 text-2xl font-medium text-white">Pas</label>
                </div>
                <div className="flex items-center">
                    <input id="cat" type="radio" value="cat" onChange={() => changeFilter("mačka", "cat")} name="species" className="w-6 h-6 ml-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="cat" className="ml-2 text-2xl font-medium text-white">Mačka</label>
                </div>
                <div className="flex items-center">
                    <input id="turtle" type="radio" value="kornjača" onChange={() => changeFilter("kornjača", "turtle")} name="species" className="w-6 h-6 ml-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="turtle" className="ml-2 text-2xl font-medium text-white">Kornjača</label>
                </div>
                <div className="flex items-center">
                    <input id="horse" type="radio" value="konj" onChange={() => changeFilter("konj", "horse")} name="species" className="w-6 h-6 ml-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="horse" className="ml-2 text-2xl font-medium text-white">Konj</label>
                </div>
                {filterBy != "" && <div onClick={() => (closeFilter(radioId))} className="ml-6 mt-1 cursor-pointer">
                    <GiCancel size={30} color="white"/>
                </div>}
            </div>
            <div className="flex flex-wrap">
                
            {animalArray.filter((el) => {
                console.log(filterBy)
                return filterBy != "" ? el.species.toLowerCase().includes(filterBy) : el
            }
            ).map(el => (
                <AnimalCard open={openModal} fetch={fetchSelectedAnimal} id={el.id} name={el.name} description={el.description} adopted={el.adopted} species={el.species} picture={el.picture} />
            ))}
            </div>
            {isOpen && (<Overlay close={closeModal}>{<AnimalModal write={writeToDatabase} close={closeModal} animal={selectedAnimalData} setAnimal={setSelectedAnimalData}/>}</Overlay>)}
    
            <Footer />
            </>
        )
    }
}

export default Animals