import { useEffect, useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'


function Slider(){
    
    const [currentIndex, setCurrentIndex] = useState(0)
    //useEffect(automaticSlideSwitch, [currentIndex])

    const slides = [
        {
            url: 'https://media.4-paws.org/6/8/9/3/689354d6694789b45569cd647a6009e240b4afe7/VIER%20PFOTEN_2016-09-18_081-1927x1333-1920x1328.jpg'
        },
        {
            url: 'https://petface.net/wp-content/uploads/2015/01/azili-1.jpg'
        },
        {
            url: 'https://d35nxk5xx1d0px.cloudfront.net/repository/images/_variations/4/6/1/d/461d53fdccfcdb75bec53c72f2179b3d_view_article_new.jpg?v=21'
        },
        {
            url: 'https://epodravina.hr/wp-content/uploads/2018/07/MG_9981.jpg'
        },
    ]

    function nextSlide(){
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    function previousSlide(){
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    function automaticSlideSwitch(){
        setTimeout(nextSlide, 5000)
    }
    
    return(
        <>
        <div className="w-full h-[500px] m-auto relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500" />
            <div className='text-8xl w-full text-center absolute top-20 text-white/90 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                Azil za životinje Salus
            </div>
            <div className='text-4xl text-center w-full absolute top-[60%] text-white/90 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                Briga za životinje, briga za život 
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={previousSlide} size={30}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
            <div className='w-full flex justify-center absolute top-[75%]'>
            <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center">Udomi!</button>
            </div>
        </div>
        </>
    )
}

export default Slider