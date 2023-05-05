import { IoCloseCircleOutline } from 'react-icons/io5'
import { BsFillHouseFill } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'

function AnimalModal({ close, animal }){

    return(
        <>
            <AnimatePresence>
                <motion.div onClick={(e) => e.stopPropagation()} className="mx-auto my-auto bg-white rounded-lg shadow dark:bg-gray-700 w-[60%] h-[60%] flex">
                    <img src={'/images/' + animal.picture} className='rounded-l-lg w-[48%]'></img>
                    <div className='right-0 w-[52%]'>
                        <button onClick={close} className='relative mt-3 left-[92%]'><IoCloseCircleOutline size={25}/></button>
                        <h2 className='text-center font-bold text-5xl'>{animal.name}</h2>
                        <div className='mx-3 mt-3'>
                            <p className='leading-relaxed italic text-gray-500'>{animal.description}</p>
                        </div>
                        <div className='mt-8 ml-4 flex justify-between'>
                            <div className='flex'>
                                <BsFillHouseFill size={50} color={"blue"}/>
                                <p className='font-bold text-3xl ml-4 mt-4'>{animal.adopted}</p>
                            </div>
                            <div className='mr-5 mt-6 mb-4 flex'>
                                <p className='text-2xl leading-relaxed text-gray-600 dark:text-gray-400 '>Vrsta: {animal.species}</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-m px-8 py-3 mt-3">Udomi</button>
                        </div>
                    </div>
                
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default AnimalModal