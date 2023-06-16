import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Base.css'
import { Outlet } from 'react-router-dom'
import { playerController } from '../context/PlayerContext'
import { Logout } from '@mui/icons-material'

function Base() {
    const {handleGoogleSignIn,player,handleGoogleSignOut} = playerController()
  return (
    <div className='base flex flex-col'>
        <div className='m-3 flex justify-between items-center text-gray-300'>
            <img src="/musicTherapy/logo.jpg" alt="..." className='w-96 rounded' />
            <button className='bg-gradient-to-r from-violet-800 p-5 rounded to-slate-900  shadow-green-700 shadow-2xl'>Add Therapy</button>
            <div   className="rounded bg-gradient-to-r flex items-center from-violet-800 p-5  to-slate-900  shadow-green-700 shadow-2xl">
                {player.score} <img src='/musicTherapy/coin.png' className='w-8 h-8 animate-bounce animate-spin'  />
            </div>
           {player.token === "" ? <div onClick={handleGoogleSignIn} className="rounded bg-gradient-to-r from-violet-800 p-5  to-slate-900 shadow-green-700 shadow-2xl">
                Sign In
            </div>:<div>Welcome{" "+player.name} <Logout onClick={handleGoogleSignOut} /></div>}
        </div>
        <div className='flex text-gray-300'>
        
        <div className=' basis-1/4'>
            <ul>
            <Link to='/'> <li className='p-10 bg-gradient-to-r from-slate-950 to-grey-950 m-5 hover:scale-110 rounded-md hover:transition-all hover:text-green-300  transition hover:ease-in-out duration-700 cursor-pointer font-bold'>Home</li></Link>
               <Link to='/therapy'> <li className='p-10 bg-gradient-to-r from-slate-950 to-grey-950 m-5 hover:scale-110 rounded-md hover:transition-all  duration-700  hover:text-green-300  cursor-pointer font-bold'>Therapy</li></Link>
                <Link to='/league'><li className='p-10 bg-gradient-to-r from-slate-950 to-grey-950 m-5 hover:scale-110 rounded-md hover:transition-all  duration-700  hover:text-green-300 cursor-pointer font-bold'>Play league</li></Link>
                <Link><li className='p-10 bg-gradient-to-r from-slate-950 to-grey-950 m-5 hover:scale-110 rounded-md hover:transition-all  duration-700  hover:text-green-300 cursor-pointer font-bold'>Battles</li></Link>
                <Link><li className='p-10 bg-gradient-to-r from-slate-950 to-grey-950 m-5 hover:scale-110 rounded-md hover:transition-all  duration-700  hover:text-green-300 cursor-pointer font-bold'>Practice</li></Link>
                <Link><li className='p-10 bg-gradient-to-r from-slate-950 to-grey-950 m-5 hover:scale-110 rounded-md hover:transition-all  duration-700  hover:text-green-300 cursor-pointer font-bold'>My Account</li></Link>

            </ul>
        </div>
        <div className="basis-3/4 bg-slate-950/80 rounded-lg p-5 m-3">
            <Outlet/>
        </div>


        </div>
    </div>
  )
}

export default Base