import { useState, useEffect } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import Table from "../components/Table";
import Overlay from "../components/Overlay";
import DonationModal from "../components/DonationModal";


function Donations({ changeRole }){

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
    const reference = ref(db, 'donations')
    const [donationId, setDonationId] = useState(5)

    function writeToDatabase(donationItem, donationAmount, donationDescription, donationStatus){
        set(ref(db, "donations/d" + donationId), {
            item: donationItem,
            amount: donationAmount,
            description: donationDescription,
            status: donationStatus
        })
        setDonationId(current => current + 1)
    }

    const donationStatus = ["wanted", "offered", "done"]

    const [donations, setDonations] = useState({})

    const [isOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    useEffect(() => {
        onValue(reference, snapshot => {
        const tempData = snapshot.val()
        setDonations(tempData)
        })
    },[])


    if(Object.keys(donations).length == 0){
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
        return(
            <>
                <Navbar changeRole={changeRole}/>
                <div className="w-[100%] flex justify-center">
                    <button type="button" onClick={openModal} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xl px-8 py-5 text-center mx-auto my-6">Nova donacija</button>
                </div>
                <p className="text-white text-5xl ml-10 mb-6">Tražimo:</p>
                <Table donations={donations} status={donationStatus[0]} />
                <div className="h-0 w-[90%] mx-auto mb-6 border-2 border-white"></div>
                <p className="text-white text-5xl ml-10 mb-6">Nudi se:</p>
                <Table donations={donations} status={donationStatus[1]} />
                <div className="h-0 w-[90%] mx-auto mb-6 border-2 border-white"></div>
                <p className="text-white text-5xl ml-10 mb-6">Donirano:</p>
                <Table donations={donations} status={donationStatus[2]} />

                {isOpen && (<Overlay close={closeModal}>{<DonationModal close={closeModal} writeToDatabase={writeToDatabase}/>}</Overlay>)}

                <Footer />
            </>
        )
    }
}

export default Donations