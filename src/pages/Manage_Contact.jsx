import axios from 'axios';
import React from 'react'
import { useEffect,useState } from "react";
function Manage_Contact() {
const [data, setdata]=useState([]);




useEffect(()=>{fetchdata();},[]);




const fetchdata=async()=>{
    const res=await axios.get("http://localhost:3000/contact");
    setdata(res.data);
}


const ondelete=async(id)=>{
const res= await axios.delete(`http://localhost:3000/contact/${id}`);
alert("data deleted soon");
fetchdata();

}

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Hover Data Table</h3>
                            </div>{/* /.box-header */}
                            <div className="box-body">
                                <table id="example2" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email-id</th>
                                            <th>Password</th>
                                            <th>mobile</th>
                                            <th>Update/Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item,index,ent)=>{
                                                return(
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td> {item.mobile}</td>
                                            <td><button onClick={()=>{ondelete(item.id)}} >Delete</button>
                                            {/* <button style={{marginLeft:"20px"}} onClick={()=>{onupdate(item.id)}}>update</button> */}
                                            </td>
                                        
                                        </tr>)})
                                        }
                                   </tbody>
                                </table>
                            </div>{/* /.box-body */}
                        </div>{/* /.box */}
                    </div>
                </div>
            </section>
            </div>
            
          
    )
}

export default Manage_Contact