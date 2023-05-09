import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillHouseFill } from 'react-icons/bs'

function AnimalCard({ open, write, fetch, id, name, description, adopted, species, picture }){

    const [adoptedStatus, setAdoptedStatus] = useState("NE")

    useEffect(() => {
        if(adopted == true){
            setAdoptedStatus("DA")
        }
    }, [])



    return(
    <>
    <motion.div onClick={() => {open(), fetch(id, name, description, adopted, species, picture)}} whileHover={{scale: 1.1}} className="max-w-[20%] m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
            <img className="rounded-t-lg w-[100%] h-[300px]" src={picture} alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <div className="flex justify-between mt-4">
                <div className="flex">
                <BsFillHouseFill size={30} color={`${adopted === false ? 'blue' : 'red'}`}/>
                    <p className="font-bold text-xl text-gray-900 dark:text-gray-400 ml-2 mt-1">{adoptedStatus}</p>
                </div>
            <h5 className="mb-2 text-2xl font-bold text-center uppercase tracking-tight text-gray-800">{species}</h5>
            </div>
        </div>
    </motion.div> 
    </>
    )
}

export default AnimalCard