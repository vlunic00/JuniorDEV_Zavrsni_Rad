import { IoCloseCircleOutline } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'

function DonationModal({ close }){
    return(
        <>
         <AnimatePresence>
            <motion.div onClick={(e) => e.stopPropagation()} className="mx-auto my-auto bg-white rounded-lg shadow w-[60%] h-[60%]">
                <button onClick={close} className='relative mt-4 left-[95%]'><IoCloseCircleOutline size={25}/></button>
                <div className='w-[100%] text-center'>
                    <h2 className='text-black text-4xl font-bold'>Nova donacija</h2>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[40%]'>
                        <div className='mt-4 ml-4 w-[100%]'>
                            <label for="item" className="block mb-2 text-l font-medium text-gray-900">Tip</label>
                            <input type="text" name="item" id="item" className="bg-gray-200 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Hrana/Igračke/Financije/...' required />
                        </div>
                        <div className='mt-4 ml-4 w-[100%]'>
                            <label for="amount" className="block mb-2 text-l font-medium text-gray-900">Iznos</label>
                            <input type="text" name="amount" id="amount" className="bg-gray-200 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='€' required />
                        </div>
                        <div className='mt-4 ml-4 w-[100%]'>
                            <label for="description" className="block mb-2 text-l font-medium text-gray-900">Opis</label>
                            <input type="text" name="description" id="description" className="bg-gray-200 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Dodatno pojasni svoju donaciju...' />
                        </div>
                    </div>
                    <div className='w-[55%] right-0 text-center mt-3'>
                        <h2 className='text-5xl text-gray-700 font-bold'>Hvala Vam!</h2>
                        <p className='text-m italic text-gray-600 mt-2'>Azil Salus u potpunosti je neprofitna udruga koja uvelike ovisi o donacijama dobrih ljudi. Hvala Vam na ovoj velikodušnoj donaciji koja će uljepšati život našim predivnim životinjama.</p>
                        <img src='images/donation.jpg' alt='Playful dog image' className='mx-auto mt-3 h-[60%] w-[70%]'></img>
                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </>
    )
}
export default DonationModal