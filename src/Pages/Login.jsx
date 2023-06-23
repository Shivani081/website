
import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {






  const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('adminname')) {
      redirect('/');
    }
  }, []);

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: ""
  })

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    //console.log(formvalue);
  }
 

  const onsubmit = async (e) => {
    e.preventDefault();
      const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
      if (res.data.length > 0) {
  
        if (res.data[0].password == formvalue.password) {
  
            localStorage.setItem('id', res.data[0].id);
            localStorage.setItem('name', res.data[0].name);
         
  
            setFormvalue({ ...formvalue, email: "", password: "" });
            redirect("/index")
            alert("login successfull")

          
          
        }
        else {
         
          setFormvalue({ ...formvalue, email: "", password: "" });
          alert("login fail")         ;
             redirect("/");

        }
      }
  }


  return (
    // <div>

    //   <form>
    //     <div className="form-group pb-3">
    //       <label htmlFor="exampleInputEmail1">Email address</label>
    //       <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formvalue.email} onChange={onchange} name='email' />
    //     </div>
    //     <div className="form-group pb-3" >
    //       <label htmlFor="exampleInputPassword1">Password</label>
    //       <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={formvalue.password} onChange={onchange} name='password' />
    //     </div>

    //     <button type="submit" className="btn btn-primary" onClick={onsubmit}>Submit</button>
    //   </form>
    // </div>


    <div>

      
    <div className="container-fluid">
   <div className="contact_section_2">
     <div className="row">
       <div className="col-md-12">
         <div className="mail_section_1">
          
           <input type="text" className="mail_text" placeholder="Your Email" value={formvalue.email} onChange={onchange} name='email' />
           <input type="password" className="mail_text mb-4" placeholder="Your password" value={formvalue.password} onChange={onchange} name='password'/>
          
           <button type="submit" className="btn btn-danger offset-5 " onClick={onsubmit}>Submit</button>
         </div>
         <p>If you are new Create Account <NavLink to="/signup"> Sign up</NavLink></p>
       </div>
       <div className="map_main">
         <div className="map-responsive">
           <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={250} height={500} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
         </div>
       </div>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Login