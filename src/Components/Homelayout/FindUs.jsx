import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram, FaTwitter } from 'react-icons/fa6'

const FindUs = () => {
  return (
    <div className=' mt-5'>
       <h2 className='font-bold mb-5'>Find Us On</h2>
        <div>
             <div className='join join-vertical w-full'>
                 <button className=' btn bg-base-100 justify-start  join-item'> <FaFacebook></FaFacebook> Facbook</button>
                 <button className=' btn bg-base-100 justify-start join-item'> <FaTwitter></FaTwitter> Twiter</button>
                 <button className=' btn bg-base-100 justify-start join-item'> <FaInstagram></FaInstagram> Intagram</button>
             </div>
        </div>
    </div>
  )
}

export default FindUs
