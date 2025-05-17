import React from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/Authprovider'
import { use } from 'react';

const Register = () => {
     const { creatUser,setUser}=use(AuthContext);
     const handleFromSubmit=e=>{
         e.preventDefault();
         const name=e.target.name.value;
         const photo=e.target.photo.value;
         const email=e.target.email.value;
         const password=e.target.password.value;
        
         console.log(name,photo,email,password)
         creatUser(email,password)
         .then(result=>{
            const user=result.user;
            setUser(user)
         })
         .catch(error=>{
             console.log(error)
         })
     }
  return (
     <div className=' flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
             <h2 className=' text-center text-2xl '>Register Your Account</h2>
      <div className="card-body">
        <form onSubmit={handleFromSubmit} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" />

           <label className="label">Photo Url</label>
          <input type="text" name='photo' className="input" placeholder="Photo URl" />

          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
         
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
           <p className='font-bold text-center'>Already Have An Account ? <Link className=' text-blue-600' to='/auth/login'>Login</Link> </p>
        </form>
      </div>
    </div>
      </div>
  )
}

export default Register
