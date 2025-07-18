import Home from "./Home"
import About from "./About"
import Login from "./Login"
import { Routes, Route } from "react-router"
import { Link } from "react-router"
import Navbar from "./Navbar"
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
