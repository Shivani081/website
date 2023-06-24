import Footer from "./component/Footer";
import Header from "./component/Header";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/Login";




import Add_product from "./pages/Add_product";
import Edit_user from "./pages/Edit_user";
import View_product from "./pages/View_product";
import Manage_user from "./pages/Manage_user";
import Manage_Contact from "./pages/Manage_Contact";

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" index element={<><Login/></>}/>
 
  <Route path="/dashboard" element={<><Header/><Dashboard/><Footer/></>}/>
  <Route path="/add_product" element={<><Header/><Add_product/><Footer/></>}/>
  <Route path="/edit_user/+item.id" element={<><Header/><Edit_user/><Footer/></>}/>
  <Route path="/manage_conatct" element={<><Header/><Manage_Contact/><Footer/></>}/>
  <Route path="/manage_user" element={<><Header/><Manage_user/><Footer/></>}/>
  <Route path="/view_product" element={<><Header/><View_product/><Footer/></>}/>
  <Route path="/manage_product" element={<><Header/><Manage_Contact/><Footer/></>}/>
 
  
 </Routes>
 </BrowserRouter>


   );
}

export default App;
