import React, { use } from 'react'
import { NavLink } from 'react-router';

const catagoriesPromise=fetch('/public/categories.json')
.then(res=>res.json())
const Catagories = () => {
    const catagories=use(catagoriesPromise);
  return (
    <div>
      <h2 className=' font-bold'>All catorgoris </h2>
       <div className=' grid grid-cols-1 mt-5 gap-3'>
         {
            catagories.map(catagory=><NavLink to={`/catagory/${catagory.id}`} className='btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent ' key={catagory.id}>{catagory.name}</NavLink>)
         }
       </div>
    </div>
  )
}

export default Catagories
