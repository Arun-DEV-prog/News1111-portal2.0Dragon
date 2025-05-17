import React, { use } from 'react'
import { NavLink } from 'react-router'
import userPic  from "../assets/user.png"
import { AuthContext } from '../provider/Authprovider'
const Navber = () => {
  const {user,  logOut}=use(AuthContext);
  const handleLogOut=()=>{
       logOut()
       .then(()=>{
         alert("LogOut Successfully");
       })
       .catch(error=>{
         console.log(error);
       })
  }
  return (
    <div className=' flex justify-between items-center'>
         <div className=''></div>
     <div className='nav flex gap-5 text-accent'>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/about'>About</NavLink>
         <NavLink to='/rarear'>Carear</NavLink>
     </div>
      <div className='login-btn flex gap-3'>
      <img src={userPic} alt="" />
      {
         user ? <button onClick={handleLogOut} className='btn btn-primary'> LogOut</button>:    <NavLink to='/auth/login' className='btn btn-primary'>Login</NavLink>
      }
       
      </div>
    </div>
  )
}

export default Navber
