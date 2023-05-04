import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaTiktok,
} from 'react-icons/fa'
import ContactForm from './ContactForm'


function Footer(){
    return(
        <>
        <div className="w-100% mx-auto py-16 px-4 grid grid-cols-3 gap-8 text-gray-300 bg-[#2e2e2e]">
            <div>
                <h1 className="font-bold text-white px-10 text-5xl">Salus</h1>
                <p className="px-10 py-2 text-xl">Zajedno možemo promijeniti živote naših napuštenih prijatelja!</p>
                <div className='flex justify-between w-[50%] px-10'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaTiktok size={30}/>
                </div>
            </div>
            <div>
                <h2 className='text-4xl text-white'>Kontaktiraj nas!</h2>
                <ContactForm />
            </div>
            <div className='text-4xl text-white'>
                Posjeti nas!
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.3351482133908!2d16.460404575955287!3d43.51620337110899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e15e2010fc1%3A0xf2fa58c875e795be!2sUl.%20Ivana%20Kukuljevi%C4%87a%20Sakcinskog%2037%2C%2021000%2C%20Split!5e0!3m2!1shr!2shr!4v1682979559470!5m2!1shr!2shr"
            className='w-[100%] h-[100%] mt-2 rounded-md' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
}

export default Footer