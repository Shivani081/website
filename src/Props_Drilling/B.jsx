import React from 'react'
import c from './C'
import C from './C'

function B({name, setName}) {
  return (
    <div>Hi I am B

    < C name={name} setName={setName}/>
    </div>

  )
}

export default B