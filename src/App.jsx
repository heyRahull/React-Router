import Home from "./Home"
import About from "./About"
import Login from "./Login"
import { Routes, Route, Navigate } from "react-router"
import { Link } from "react-router"
import Navbar from "./Navbar"
import ErrorPage from "./ErrorPage"
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
      </Routes>
    </div>
  )
}

export default App
