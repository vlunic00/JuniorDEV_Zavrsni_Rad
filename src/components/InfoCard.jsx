import { useState, useContext } from "react"
import { BsFillTrash3Fill } from "react-icons/bs"
import AdminContext from "./context"


function InfoCard({ info, deleteInfo }){

    const role = useContext(AdminContext)

    return(
        <>
        <div className="h-60 w-[55%] bg-gray-200 mx-auto mt-6 mb-6 rounded-xl">
            <div className={`top-0 h-[25%] w-full ${info.important === true ? "bg-red-400" : "bg-green-400"}`}>
                <p className="text-center text-gray-800 text-3xl font-bold pt-2">{info.title}</p>
            </div>
            <div className="text-center h-[40%] w-[80%] mx-auto">
                <p className="leading-relaxed italic mt-5 text-gray-600 text-l">{info.body}</p>
            </div>
            <div className="w-[100%] flex justify-between">
                <p className="text-xl font-bold pt-6 ml-4 text-gray-700 right-5">{info.day}.{info.month}.{info.year}</p>
                {role=="admin" && 
                <div onClick={() => deleteInfo(info.id)} className="mr-6 mt-2 cursor-pointer">
                    <BsFillTrash3Fill size={30} color="gray"/>
                </div>
                }
            </div>
        </div>
        </>
    )
}

export default InfoCard