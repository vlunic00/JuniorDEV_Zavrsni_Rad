import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillHouseFill } from 'react-icons/bs'

function AnimalCard({ open, fetch, name, description, adopted, species, picture }){

    const [adoptedStatus, setAdoptedStatus] = useState("NE")

    useEffect(() => {
        if(adopted == true){
            setAdoptedStatus("DA")
        }
    }, [])

    return(
    <>
    <motion.div onClick={() => {open(), fetch(name, description, adoptedStatus, species, picture)}} whileHover={{scale: 1.1}} className="max-w-[20%] m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
            <img className="rounded-t-lg w-[100%] h-[300px]" src={picture} alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <div className="flex justify-between mt-4">
                <div className="flex">
                    <BsFillHouseFill size={30} color={"blue"}/>
                    <p className="font-bold text-xl text-gray-900 dark:text-gray-400 ml-2 mt-1">{adoptedStatus}</p>
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Udomi</button>
            </div>
        </div>
    </motion.div> 
    </>
    )
}

export default AnimalCard