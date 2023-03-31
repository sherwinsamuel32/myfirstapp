import React, {useState}from 'react'
import {faker} from '@faker-js/faker'

const Image = () => {
    let [img,setImg]=useState(faker.image.avatar());
    return (
    <div>
           <img src={img}/> <br/>
           <button onClick={()=>{
           setImg(faker.image.avatar())
           }}>CHANGE</button>
    </div>
  )
}

export default Image
