import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import  {  useEffect } from 'react'

import axios from 'axios';

function Signup() {
    const [formvalue, setFormValue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: ""
    });

    const onchange = (e) => {
        setFormValue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const redirect = useNavigate();

    
  

    const onsubmit = async(e) => {
        e.preventDefault();
       
            const res = await axios.post('http://localhost:3000/user', formvalue);
             console.log(res)
            if (res.status === 201) {
               
                setFormValue({...formvalue, name: "", email: "", password: "", mobile: "" })
                console.log('res');
                redirect('/about');

            
        }
    }
  return (
   <div>
        <div className="col-md-12">
            <div className="mail_section_1">
              <input type="text" className="mail_text" placeholder="Your Name" value={formvalue.name} onChange={onchange} name='name' />
              <input type="email" className="mail_text" placeholder="Your Email" value={formvalue.email} onChange={onchange} name='email' />
              <input type="password" className="mail_text" placeholder="Youe password" value={formvalue.password} onChange={onchange} name='password'/>
              <input type="tel  " className="mail_text" placeholder="Your Phone" value={formvalue.mobile} onChange={onchange} name='mobile'/>
              <button type="submit" className="btn btn-danger offset-5" onClick={onsubmit}>Submit</button>
            </div>
            <p><NavLink to="/login">login in page</NavLink></p>
          </div>
    </div>
  )  
}

export default Signup