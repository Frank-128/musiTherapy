import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { playerController } from '../context/PlayerContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Mode() {
  
  const {player} = playerController()
  
  const navigate = useNavigate()
  return (
    <div className='flex flex-col relative items-center gap-24 h-full'>
        <h1 className='text-center text-4xl'>How Do you want to Play the <i className='text-blue-800'>{player.mode}</i> ?</h1>
        <div className='flex justify-around w-full '>
            <Button>Use musicTherapy lyrics</Button>
            <Button onClick={()=>navigate('/game/23')}>Use my own lyrics</Button>
        </div>
        <div className='bg-blue-800 rounded-md '><Button onClick={()=>navigate(-1)}>Back</Button></div>
    </div>
  )
}

export default Mode