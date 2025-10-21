import React from 'react'

const Child1 = ({name,address,age,profession}) => {
  return (
    <div>
       <ul>
        <li>My Name is {name} i am from {address} i am {age} years old and i am a {profession}</li>
       </ul>
    </div>
  )
}

export default Child1