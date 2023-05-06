
function Navbar() {
  return (
    <>
    <nav className="flex justify-between items-center h-24 w-full mx-auto pl-4 pr-7 bg-[#2e2e2e]">
        <a href="/"><h1 className="font-bold text-white px-10 h-full text-5xl py-5">Salus</h1></a>
        <div className="flex pr-6">
        <ul className="flex text-white">
            <a href="/zivotinje"><li className="p-6 h-[100%] text-2xl hover:bg-[#4f4f4f] cursor-pointer">Životinje</li></a>
            <a href="/donacije"><li className="p-6 h-[100%] text-2xl hover:bg-[#4f4f4f] cursor-pointer">Donacije</li></a>
            <li className="p-6 text-2xl hover:bg-[#4f4f4f] cursor-pointer">Obavijesti</li>
            <li className="p-6 text-2xl hover:bg-[#4f4f4f] cursor-pointer">Unos</li>
        </ul>
        <label
        className="inline-block pr-3 pl-6 my-6 hover:cursor-pointer text-white text-2xl"
        htmlFor="flexSwitchCheckDefault">Admin</label>      
        <input className="mr-2 my-9 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute  before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent
            before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)]
            after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5
            checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)]
            checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)]
            focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary
            checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary
            dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
    </nav>
    </>
  )
}

export default Navbar
