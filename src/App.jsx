import Home from "./Home"
import About from "./About"
import Login from "./Login"
import { Routes, Route, Navigate } from "react-router"
import { Link } from "react-router"
import Navbar from "./Navbar"
import ErrorPage from "./ErrorPage"
import Tutorial from "./Tutorial"
import ReactTut from "./ReactTut"
import JSTut from "./JSTut"
import NodeTut from "./NodeTut"
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
        <Route path="/tutorial" element={<Tutorial/>}>
          <Route path="react" element={<ReactTut/>}/>
          <Route path="javascript" element={<JSTut/>}/>
          <Route path="node" element={<NodeTut/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
