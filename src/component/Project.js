import React, { useEffect, useState } from 'react'

export default function Project() {
    const[count, setCount]=useState(0)
useEffect(()=>{
    setTimeout(()=>{
        console.log(count)
setCount((count) => count+1);
    },1000)
})

  return (
    <>
    <div>I have rendered {count} times!</div>
    

    
    </>
  )
}
