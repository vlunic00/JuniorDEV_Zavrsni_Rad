import { useState } from "react"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"



function Root({ changeRole }){

    return(
        <>
            <Navbar changeRole={changeRole}/>
            <Slider />
            <CTA />
            <Footer />
        </>
    )
}

export default Root