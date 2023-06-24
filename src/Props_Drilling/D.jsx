import React from 'react'

function D({name, setName}) {
  return (
    <div> Hi I am D

        <button onClick={()=>{setName=("Shivanya Gohil")}}>D button</button>

    </div>
  )
}

export default D