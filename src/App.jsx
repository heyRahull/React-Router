import About from "./About"
import Home from "./Home"
import { Routes, Route } from "react-router"

function App() {

  return (
    <div>
      <h1>React Router Setup</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
