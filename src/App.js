import {  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./Pages/Index";
import Coffee from "./Pages/Coffee";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import User_profile from "./Pages/User_profile";








function App() {
  return (
    <div >
   
      
        <Routes>
      

           <Route path="/index"   index element={<><Header/><Index/><Footer/></>}></Route>
          <Route path="/about"   element={<><Header/><About></About><Footer/></>}></Route>
          <Route path="/blog"    element={<><Header/><Blog/><Footer/></>}></Route>
          <Route path="/coffees"   element={<><Header/><Coffee/><Footer/></>}></Route>
          <Route path="/contact"    element={<><Header/><Contact/><Footer/></>}></Route>
          <Route path="/"    element={<><Header/><Login/><Footer/></>}></Route>
          <Route path="/signup"    element={<><Header/><Signup/><Footer/></>}></Route>
          <Route path="/user_profile"    element={<><Header/><User_profile/><Footer/></>}></Route>
          

        </Routes>
      
    </div>
  );
}

export default App;
