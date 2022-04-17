import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="service/:insId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
