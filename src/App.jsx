import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Tutorial from "./Tutorial";
import ReactTut from "./ReactTut";
import JSTut from "./JSTut";
import NodeTut from "./NodeTut";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<Navbar />}> {/* This is layout  */}
          <Route path="/" element={<Home />} />
          <Route path="/user"> {/*Route Prefix*/}
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Route>

         {/* <Route path="/user/about" element={<About />} />
         <Route path="/user/login" element={<About />} /> */}

          <Route path="/*" element={<ErrorPage />} />
          <Route path="/tutorial" element={<Tutorial />}>
            <Route index element={<ReactTut />} />
            <Route path="react" element={<ReactTut />} />
            <Route path="javascript" element={<JSTut />} />
            <Route path="node" element={<NodeTut />} />
          </Route>
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductDetails/>}/>{/* Dynamic Routing */}
          
        </Route>

        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
      </Routes>
    </div>
  );
}

export default App;
