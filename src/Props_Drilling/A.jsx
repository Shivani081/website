import React from 'react'
import B from './B'


function A({name, setName}) {
  return (
    <div>
        <h1> Hi i am A</h1>
        < B name={name} setName={setName}/>

    </div>
  )
}

export default A