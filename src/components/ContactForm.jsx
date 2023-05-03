

function ContactForm(){
    return(
        <>
        <div className="w-[75%] h-[90%] mt-2 bg-gray-700 rounded-md">
            <form>
                <div className="flex">
                    <label className="ml-2">Ime
                        <input type="text" id="firstName" placeholder="Ime" className="w-[90%]"></input>
                    </label>
                    <label>Prezime
                        <input type="text" id="lastName" placeholder="Prezime" className="w-[90%]"></input>
                    </label>
                </div>
                <div>
                <label className="mt-1 ml-2">E-mail
                    <input type="text" id="email" className="w-[95%] mt-1 ml-2" placeholder='Email adresa' />
                </label>
                </div>
                <div>
                <label className="mt-1 ml-2">Predmet
                    <input type="text" id="subject" className="w-[95%] mt-1 ml-2" placeholder='Predmet' />
                </label>
                </div>
                <div>
                <label className="mt-1 ml-2">Sadržaj
                    <input type="text" id="message" className="w-[95%] h-20 mt-1 ml-2" placeholder='Sadržaj' />
                </label>
                </div>
            </form>
        </div>
        </>
    )
}

export default ContactForm