import { Group, People, Person, Person2 } from '@mui/icons-material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { playerController } from '../context/PlayerContext'

function League() {
  const navigate = useNavigate()
  const {setPlayer} = playerController();
  return (
    <div className='flex text-3xl flex-col items-center gap-10'>
      <div className='text-5xl font-serif text-center animate-pulse'><i>PLAY IDENTIFY LYRICS GAME</i></div>
      <div onClick={()=>{setPlayer(prev=>({...prev,mode:'1 v 1'})); navigate('/mode')}}  className='w-1/3 flex flex-col gap-4 rounded-lg cursor-pointer hover:bg-blue-300/50 transition-colors duration-500 bg-slate-800/50 p-4'>
        <span className='border-b-2 w-full text-center  border-blue-950'>1 vs 1</span>
        <div className='flex justify-between'>

      <Person/><Person2/></div>
        </div>
        <div onClick={()=>{setPlayer(prev=>({...prev,mode:'1 vs Group'})); navigate('/mode')}} className='w-1/3 flex flex-col gap-4 rounded-lg cursor-pointer hover:bg-blue-300/50 transition-colors duration-500 bg-slate-800/50 p-4'>
        <span className='border-b-2 w-full text-center  border-blue-950'>1 vs Group</span>
        <div className='flex justify-between'>

      <Person/><Group/></div>
        </div>
        <div onClick={()=>{setPlayer(prev=>({...prev,mode:'Group vs Group'})); navigate('/mode')}} className='w-1/3 flex flex-col gap-4 rounded-lg cursor-pointer hover:bg-blue-300/50 transition-colors duration-500 bg-slate-800/50 p-4'>
        <span className='border-b-2 w-full text-center  border-blue-950'>Group vs Group</span>
        <div className='flex justify-between'>

      <Group/><People/></div>
        </div>
    </div>
  )
}

export default League