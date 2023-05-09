import { IoCloseCircleOutline } from 'react-icons/io5'
import { BsFillHouseFill, BsFillPencilFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'
import { useState,useEffect, useContext } from 'react'
import AdminContext from "./context"

function AnimalModal({ write, close, animal, setAnimal }){

    const role = useContext(AdminContext)
    const [item, setItem] = useState("none")
    const [adoptedStatus, setAdoptedStatus] = useState("NE")
    const animalTypes = ["Pas", "Mačka", "Kornjača", "Konj"]

    function editItem(itemName){
        setItem(itemName)
    }

    const inputChange = (event) => {
        const {name, value} = event.target
        setAnimal({...animal, [name]: value})
    }

    useEffect(() => {
        if(animal.adopted == true){
            setAdoptedStatus("DA")
        }
    }, [])



    return(
        <>
            <AnimatePresence>
                <motion.div onClick={(e) => e.stopPropagation()} className="mx-auto my-auto bg-white rounded-lg shadow dark:bg-gray-700 w-[60%] h-[60%] flex">
                    <div className='w-[48%] h-[100%]'>
                    {item === "picture" ? 
                    <div className="mb-3 flex">
                        <div className="mb-3">
                            <label htmlFor="picture" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Slika</label>
                            <input type="text" name="picture" value={animal.picture} id="picture" onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[130%] p-2.5 ml-5" placeholder="url (https://slika.jpg)" required />
                        </div>
                        <div className="relative mt-14 left-[22%] cursor-pointer">
                        <BsFillCheckCircleFill size={30} color='gray' onClick={() => (write(animal.id, animal.name, animal.species, animal.adopted, animal.description, animal.picture), editItem("none"))}/>
                        </div>
                    </div> :
                    <img src={animal.picture} className='rounded-l-lg w-[100%] h-[100%]'></img>}
                    </div>
                        {role == "admin" &&
                            <div className='mt-3 cursor-pointer relative top-[10%] left-[2%]'>
                                <BsFillPencilFill size={25} color='gray' onClick={() => (editItem("picture"))} />
                            </div>
                        }
                    <div className='right-0 w-[52%]'>
                        <button onClick={close} className='relative mt-3 left-[92%]'><IoCloseCircleOutline size={25}/></button>
                        {item === "title" ? 
                            <div className="mb-3 flex">
                                <div>
                                    <label htmlFor="name" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Ime</label>
                                    <input type="text" name="name" id="name" value={animal.name} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 ml-5" placeholder="Ime životinje" required />
                                </div>
                                <div className="mt-14 ml-7 cursor-pointer">
                                <BsFillCheckCircleFill size={30} color='gray' onClick={() => (write(animal.id, animal.name, animal.species, animal.adopted, animal.description, animal.picture), editItem("none"))}/>
                                </div>
                            </div> :
                            <div className='flex justify-center'>
                                <h2 className='text-center font-bold text-5xl mr-4'>{animal.name}</h2>
                                {role == "admin" &&
                                <div className='mt-3 cursor-pointer'>
                                    <BsFillPencilFill size={25} color='gray' onClick={() => (editItem("title"))} />
                                </div>}
                            </div>
                            }
                        <div className='mx-3 mt-3'>
                            {item == "description" ? 
                                <div className='flex'>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Opis</label>
                                        <textarea id="description" name="description" type="text" rows="4" value={animal.description} onChange={inputChange} className="block p-2.5 w-[150%] ml-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Kratki opis o životinji..."></textarea>
                                    </div> 
                                    <div className="relative mt-14 left-[30%] cursor-pointer">
                                        <BsFillCheckCircleFill size={30} color='gray' onClick={() => (write(animal.id, animal.name, animal.species, animal.adopted, animal.description, animal.picture), editItem("none"))}/>
                                    </div>
                                </div>
                                : 
                                <div>
                                <p className='leading-relaxed italic text-gray-500'>{animal.description}</p>
                                    {role == "admin" &&
                                    <div className='relative left-[80%] mx-auto cursor-pointer'>
                                        <BsFillPencilFill size={25} color='gray' onClick={() => (editItem("description"))} />
                                    </div>}
                                </div>
                                }
                        </div>
                        <div className='h-[55%]'>
                            <div className='mt-8 ml-4 h-[100%] flex justify-between'>
                                <div className='flex'>
                                    <div className='mt-10'>
                                    <BsFillHouseFill size={50} color={`${animal.adopted === false ? 'blue' : 'red'}`}/>
                                    </div>
                                    <p className='font-bold text-3xl ml-4 mt-14'>{adoptedStatus}</p>
                                </div>
                                {animal.adopted == false && <button type="button" onClick={() => (write(animal.id, animal.name, animal.species, true, animal.description, animal.picture))} className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-m px-5 h-[25%] mt-12">Udomi</button>}
                                {item === "species" ? 
                                <div className="mb-3 flex">
                                    <div>
                                        <label htmlFor="species" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Vrsta</label>
                                        <select id="species" name="species" value={animal.species} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] ml-5 p-2.5">
                                        <option defaultValue={"Izaberi vrstu"}>Izaberi vrstu</option>
                                        {animalTypes.map(el => (
                                            <option value={el}>{el}</option>
                                        ))}
                                        </select>
                                    </div>
                                    <div className="mt-14 ml-7 cursor-pointer">
                                        <BsFillCheckCircleFill size={30} color='gray' onClick={() => (write(animal.id, animal.name, animal.species, animal.adopted, animal.description, animal.picture), editItem("none"))}/>
                                    </div>
                                </div> :
                                <div className='mr-5 mt-14 flex'>
                                    <p className='text-2xl leading-relaxed text-gray-600 mt-1 capitalize'>Vrsta: {animal.species}</p>
                                    {role == "admin" &&
                                    <div className='mt-3 ml-2 cursor-pointer'>
                                        <BsFillPencilFill size={25} color='gray' onClick={() => (editItem("species"))} />
                                    </div>}
                                </div>} 
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default AnimalModal