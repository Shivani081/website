
import React, { useState } from 'react';
import axios from 'axios';


function Contact() {

  

  const [formvalue, setFormValue] = useState({

    id: "",
    name: "",
    mobile: "",
    email: "",
    massage:""
    



  });



  const onchange = (e) => {
    setFormValue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('  http://localhost:3000/contact', formvalue);

    setFormValue({ ...formvalue, name: "", mobile: "", email: "", massage:""  });
    
    console.log(res)

  }

  return (
 

  


  
    <div>

      
       <div className="container-fluid">
      <div className="contact_section_2">
        <div className="row">
          <div className="col-md-12">
            <div className="mail_section_1">
              <input type="text" className="mail_text" placeholder="Your Name" value={formvalue.name} onChange={onchange} name='name' />
              <input type="text" className="mail_text" placeholder="Your Email" value={formvalue.email} onChange={onchange} name='email' />
              <input type="text" className="mail_text" placeholder="Your Phone" value={formvalue.mobile} onChange={onchange} name='mobile'/>
              <textarea className="massage-bt mb-4" placeholder="Massage" rows={5} id="comment" defaultValue={""} value={formvalue.massage} onChange={onchange} name='massage' />
              <button type="submit" className="btn btn-danger offset-5" onClick={onsubmit}>Submit</button>
            </div>
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





  


export default Contact