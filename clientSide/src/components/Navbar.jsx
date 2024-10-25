import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const {openSignIn} = useClerk()
  const {isSignedIn, user} = useUser()  

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to='/'><img className='w-32 sm:w-44' src={assets.logo} alt="" /></Link>
        {
          isSignedIn ?
            <div className='flex items-center gap-4'>
               <button onClick={()=>openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 sm:px-8 sm:py-3 text-sm rounded-full'> Support <img className='w-3 sm:w-4'  src={assets.arrow_icon} alt="" /></button>
              <UserButton/>
            </div> :
        <button onClick={()=>openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 sm:px-8 sm:py-3 text-sm rounded-full'> Get Started <img className='w-3 sm:w-4'  src={assets.arrow_icon} alt="" /></button>
          
        }
    </div>
  )
}

export default Navbar