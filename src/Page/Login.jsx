import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/Authprovider'

const Login = () => {
   const { singIn}=use(AuthContext);

   const handleLogin=(e)=>{
     e.preventDefault();
      const email=e.target.email.value;
       const password=e.target.password.value;
        singIn(email,password)
        .then((result)=>{
           const user=result.user;
           console.log(user)
        })
        .catch(error=>{
           console.log(error)
        })
        console.log(email,password)
   }
  return (
    
      <div className=' flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
             <h2 className=' text-center text-2xl '>Login Your Account</h2>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"  name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
         
          <button type='submit' className="btn btn-neutral mt-4"> <Link to='/'> Login</Link> </button>
           <p className='font-bold text-center'>Dont Have An Account ? <Link className=' text-blue-600' to='/auth/register'>Register</Link> </p>
        </form>
      </div>
    </div>
      </div>
  )
}

export default Login
