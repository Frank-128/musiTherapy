import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Base from './components/Base'
import Home from './pages/Home'
import Therapy from './pages/Therapy'
import League from './pages/League'
import OneVOne from './pages/Mode'
import Mode from './pages/Mode'
import Game from './pages/Game'
import { playerController } from './context/PlayerContext'
import Swal from 'sweetalert2'
import Protected from './components/Protected'

function App() {
  const {player,handleGoogleSignIn} = playerController()
  const navigate = useNavigate()
  const Protecteder=   ({children})=>{
    if(player.auth){
      return children
    }else{
      Swal.fire(
        { title:"Ooops!!",
         text:"Please sign in first",
         icon:'warning',
         showCancelButton:true,
         cancelButtonColor:"#d33",
         confirmButtonText:'Sign In',
         cancelButtonText:'Cancel',
         
     }).then((result)=>{
      if(result.isConfirmed){
       async ()=> await handleGoogleSignIn()
        return children
      }else{
        navigate('/')
        
      }
     })
    
       
     
    }
  }
  console.log({authIs:player.auth})
  return (
    <div>
      <Routes>
        <Route path='/' element={<Base/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/therapy' element={<Therapy/>} />
          <Route path='/league' element={<Protecteder children={<League/>}/>} />
          <Route path='/mode' element={<Mode/>} />
          <Route path='/game/:id' element={<Game/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App