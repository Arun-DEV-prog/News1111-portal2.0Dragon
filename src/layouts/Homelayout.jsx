import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import Latest from '../Components/Latest'
import Navber from '../Components/Navber'
import LeftAside from '../Components/Homelayout/LeftAside'
import RightAside from '../Components/Homelayout/RightAside'

const Homelayout = () => {
  return (
    <div>
       <header>
       <Header></Header>
       </header>
       <section className=' w-11/12 mx-auto my-3'>
         <Latest />
       </section>
       <nav className=' w-11/12 mx-auto my-3'>
         <Navber />
       </nav>
       <main className=' w-11/12 mx-auto my-3  grid grid-cols-12'>
        
        <aside className=' col-span-3 sticky top-0 h-fit'>
           <LeftAside />
        </aside>
         <section className="main col-span-6">
          <Outlet></Outlet>
         </section>
         <aside className=' col-span-3'>
           <RightAside />
         </aside>
       </main>
    </div>
  )
}

export default Homelayout
