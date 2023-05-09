import Footer from "./Footer"
import Navbar from "./Navbar"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import Overlay from "../components/Overlay";
import InfoModal from "./InfoModal";

function Info({changeRole}){

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
    const reference = ref(db, 'info')
    const [infoId, setInfoId] = useState(5)
    const [infoList, setInfoList] = useState([])

    function writeToDatabase(infoTitle, infoBody, infoImportant, infoDay, infoMonth, infoYear){
        set(ref(db, "info/d" + infoId), {
            title: infoTitle,
            body: infoBody,
            important: infoImportant,
            day: infoDay,
            month: infoMonth,
            year: infoYear
        })
        setInfoId(current => current + 1)
    }

    useEffect(() => {
        onValue(reference, snapshot => {
        const tempData = snapshot.val()
        setInfoList(tempData)
        })
    },[])

    const [isOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    return(
        <>
        <Navbar changeRole={changeRole} />
        <div className="w-[100%] flex justify-center">
            <button type="button" onClick={openModal} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xl px-8 py-5 text-center mx-auto my-6">Nova obavijest</button>
        </div>
        {Object.keys(infoList).map(el => (
            <InfoCard info={infoList[el]}/>
        ))}
        {isOpen && (<Overlay close={closeModal}>{<InfoModal close={closeModal} writeToDatabase={writeToDatabase}/>}</Overlay>)}
        <Footer />
        </>
    )
}

export default Info