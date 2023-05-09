import { IoCloseCircleOutline } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

function InfoModal({ close, writeToDatabase }){

    const [formData, setFormData] = useState({
        title: "",
        body: "",
        important: false,
        day: 1,
        month: 1,
        year: 2023
    })

    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const inputChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
        console.log(formData)
    }

    function changeImportantStatus(){
        let temp = {...formData}
        temp.important = !temp.important
        setFormData(temp)
    }

    return(
        <>
         <AnimatePresence>
            <motion.div onClick={(e) => e.stopPropagation()} className="mx-auto my-auto bg-white rounded-lg shadow w-[50%] h-[60%]">
                <button onClick={close} className='relative mt-4 left-[95%]'><IoCloseCircleOutline size={25}/></button>
                <div className='w-[100%] text-center'>
                    <h2 className='text-black text-4xl font-bold'>Nova obavijest</h2>
                </div>
                <div className='flex justify-between'>
                    <form className='w-[60%]'>
                        <div className='mt-4 ml-4 w-[100%]'>
                            <label htmlFor="item" className="block mb-2 text-l font-medium text-gray-900">Naslov</label>
                            <input type="text" name="title" value={formData.title} onChange={inputChange} id="title" className="bg-gray-200 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Naslov obavijesti' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="block mb-2 mt-5 ml-5 text-xl font-medium text-gray-900">Obavijest</label>
                            <textarea id="body" name="body" type="text" rows="4" value={formData.body} onChange={inputChange} className="block p-2.5 w-[100%] ml-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Obavijest..."></textarea>
                        </div>
                        <div className="flex items-center mb-4 ml-6 mt-4">
                            <input id="important" type="checkbox" value={formData.important} onChange={changeImportantStatus} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="default-checkbox" className="ml-2 text-l font-medium text-gray-900">Važno</label>
                        </div>
                    </form>
                    <div className='w-[20%] relative'>
                    <button type="button" onClick={() => writeToDatabase(formData.title, formData.body, formData.important, day, month + 1, year)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl absolute right-0 bottom-10 px-5 py-2.5 mb-2 mr-4 focus:outline-none">Dodaj</button>
                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </>
    )
}
export default InfoModal