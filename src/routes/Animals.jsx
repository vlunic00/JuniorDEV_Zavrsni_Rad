import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard";
import Overlay from "../components/Overlay";
import AnimalModal from "../components/AnimalModal";

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
const db = getDatabase();

function writeToDatabase(animalId, animalName, animalSpecies, adoptedStatus, descriptionMessage, imageUrl){
    const reference = ref(db, 'animals' + animalId)

    set(reference, {
        name: animalName,
        species: animalSpecies,
        adopted: adoptedStatus,
        description: descriptionMessage,
        picture: imageUrl
    })
}



function Animals(){
    const [selectedAnimalData, setSelectedAnimalData] = useState({
        name: "",
        species: "",
        adopted: "",
        description: "",
        picture: ""
    })

    const [animalArray, setAnimalArray] = useState([])
    const [animalData, setAnimalData] = useState({})

    
    useEffect(() => {
        onValue(ref(db, "animals"), snapshot => {
        const tempData = snapshot.val()
        setAnimalData(tempData)
        console.log("a")
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

    function fetchSelectedAnimal(animalName, animalDescription, animalAdopted, animalSpecies, animalPicture){
        setSelectedAnimalData({
            name: animalName,
            description: animalDescription,
            adopted: animalAdopted,
            species: animalSpecies,
            picture: animalPicture
        }
        )
    }

    if(animalArray.length == 0){
        console.log("loading")
        return(
            <>
                <Navbar />
                <div>
                    <h1 className="font-bold text-white text-6xl">Loading...</h1>
                </div>
                <Footer />
            </>
        )
    }
    else{
        console.log(animalData)
        return (
            <>
            <Navbar />
            <div className="flex">
            {animalArray.map(el => (
                <AnimalCard open={openModal} fetch={fetchSelectedAnimal} name={el.name} description={el.description} adopted={el.adopted} species={el.species} picture={el.picture} />
            ))}
            </div>
            {isOpen && (<Overlay close={closeModal}>{<AnimalModal close={closeModal} animal={selectedAnimalData} />}</Overlay>)}
    
            <Footer />
            </>
        )
    }
}

export default Animals