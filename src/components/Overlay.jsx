import { AnimatePresence, motion } from "framer-motion"

function Overlay({children, close}){

    return(
        <>
        <AnimatePresence>
            <motion.div onClick={close} className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/60 flex z-100">{children}</motion.div>
        </AnimatePresence>
        </>
    )
}

export default Overlay