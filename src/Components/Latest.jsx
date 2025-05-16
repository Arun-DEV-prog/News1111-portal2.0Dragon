import React from 'react'
import Marquee from 'react-fast-marquee'

const Latest = () => {
  return (
    <div className=' flex items-center gap-5 bg-base-200 p-3'>
      <p className=' text-base-100 bg-secondary px-3 py-2'>Latest</p>
       <Marquee className=' flex gap-5' pauseOnHover={true} >
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta quaerat libero facere assumenda quam eius molestiae!
       </p> 
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta quaerat libero facere assumenda quam eius molestiae!
       </p> 
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta quaerat libero facere assumenda quam eius molestiae!
       </p> 
       </Marquee>
       
       
    </div>
  )
}

export default Latest
