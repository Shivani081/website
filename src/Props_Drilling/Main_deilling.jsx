
import { useState } from 'react'
import A from './A'

function Main_deilling() {
const [name,setName]=useState ("Shivani Gohil");

  return (
    <div className='container mt-5'>
        <button onClick={()=>{setName ("Shivanya Gohil")}}> Click Here</button>
    
    <h1>I am Main_Dril   {name}</h1>
    <A name={name} setName={setName}/>
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Main_deilling