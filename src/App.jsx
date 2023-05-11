import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Root from './routes/Root'
import Animals from "./routes/Animals"
import Donations from "./routes/Donations"
import AdminContext from "./components/context"
import InputAnimal from "./routes/InputAnimal"
import Info from "./routes/Info"

function App() {
  
  const [role, setRole] = useState("user")

  function changeRole(){
      setRole(role == "user" ? "admin" : "user")
  }

  return (
    <>
    <AdminContext.Provider value={role}>
      <Routes>
        <Route path="/" element={<Root changeRole={changeRole}/>} />
        <Route path="zivotinje" element={<Animals changeRole={changeRole}/>} />
        <Route path="donacije" element={<Donations changeRole={changeRole}/>} />
        <Route path="unos" element={<InputAnimal changeRole={changeRole}/>} />
        <Route path="obavijesti" element={<Info changeRole={changeRole}/>} />
      </Routes>
    </AdminContext.Provider>
    </>
  )
}

export default App
