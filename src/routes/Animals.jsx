import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react"
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
    const [animalData, setAnimalData] = useState({
        name: "",
        species: "",
        adopted: false,
        description: "",
        picture: ""
    })

    const [animalArray, setAnimalArray] = useState([])

    function appendToAnimalArray(object){
        console.log(object)
    }

    const animalsRef = ref(db, 'animals');

    function getAnimalData(){
        console.log("a")
        onValue(animalsRef, (snapshot) => {
            const data = snapshot.val()
            return data
        })
    }
    
    useEffect(() => {
        const data = getAnimalData()
        console.log(data)
        Object.keys(data).map(el => {
            setAnimalArray(current => [...current, data[el]])
        })
        console.log(animalArray)
    },
    [])

    const [isOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    return (
        <>
        <Navbar />
        <AnimalCard open={openModal} />
        {isOpen && (<Overlay close={closeModal}>{<AnimalModal close={closeModal}/>}</Overlay>)}

        <Footer />
        </>
    )
}

export default Animals