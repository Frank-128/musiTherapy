import { Star } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import Hope from '../components/Hope';
import War from '../components/War';
import Control from '../components/Control';
import Love from '../components/Love';
import Education from '../components/Education';
import Motivation from '../components/Motivation';

function Therapy() {
    const [showDiv,setShowdiv] = useState(false);
    const [hope,setHope]=useState(false);
    const [war,setWar] = useState(true)
    const [control,setControl] = useState(false)
    const [love,setLove] = useState(false)
    const [education,setEducation]=useState(false)
    const [motivation,setMotivation] = useState(false) 

    const therapyPicker = (arg)=>{
        if(arg === 1){
            setHope(false);
            setControl(false);
            setLove(false);
            setEducation(false)
            setMotivation(false)
            setWar(true);
        }
        else if(arg === 2){
            setWar(false);
            setControl(false)
            setLove(false);
            setEducation(false)
            setMotivation(false)
            setHope(true);
        }
        else if(arg === 3){
            setWar(false)
            setHope(false);
            setLove(false);
            setEducation(false)
            setMotivation(false)
            setControl(true)
        }
        else if(arg === 4){
            setWar(false)
            setHope(false);
            setControl(false)
            setEducation(false)
            setMotivation(false)
            setLove(true)
        }
        else if(arg === 5){
            setWar(false)
            setHope(false);
            setControl(false)
            setLove(false)
            setMotivation(false)
            setEducation(true)
        }
        else if(arg === 6){
            setWar(false)
            setHope(false);
            setControl(false)
            setLove(false)
            setEducation(false)
            setMotivation(true)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setShowdiv(true)
        },100)
    },[])
  return (
    <div className='m-3'>
    <div className='flex  gap-4 justify-between'>
        <div onClick={()=>therapyPicker(1)} className='category cursor-pointer hover:opacity-50 hover:transition-opacity duration-500  flex justify-center items-end  w-32 h-32 rounded-lg'>
           
            <span className=' text-3xl  font-extrabold text-red-600'>War</span>
            
        </div>
        <div onClick={()=>therapyPicker(2)} className='hope cursor-pointer hover:opacity-50 hover:transition-opacity duration-500 flex justify-center items-end  w-32 h-32 rounded-lg'>
           
           <span className=' text-3xl  font-extrabold text-green-400'>Hope</span>
           
       </div>
       <div onClick={()=>therapyPicker(3)} className='control cursor-pointer hover:opacity-50 hover:transition-opacity duration-500 flex justify-center items-end  w-32 h-32 rounded-lg'>
           
           <span className=' text-3xl  font-extrabold text-red-600'>Control</span>
           
       </div>
       <div onClick={()=>therapyPicker(4)} className='love cursor-pointer hover:opacity-50 hover:transition-opacity duration-500 flex justify-center items-end  w-32 h-32 rounded-lg'>
           
           <span className=' text-3xl  font-extrabold text-pink-600'>Love</span>
           
       </div>
       <div onClick={()=>therapyPicker(5)} className='education cursor-pointer hover:opacity-50 hover:transition-opacity duration-500 flex justify-center items-end  w-32 h-32 rounded-lg'>
           
           <span className=' text-2xl  font-extrabold text-red-600'>Education</span>
           
       </div>
       <div onClick={()=>therapyPicker(6)} className='motivation cursor-pointer hover:opacity-50 hover:transition-opacity duration-500 flex justify-center items-end  w-32 h-32 rounded-lg'>
           
           <span className=' text-xl  font-extrabold text-red-600'>Motivation</span>
           
       </div>
      
    </div>
    {/* Add verified to the artists in the therapies */}
   {hope && <Hope showDiv={showDiv} />}
   {war && <War showDiv={showDiv} />}
   {control && <Control showDiv={showDiv}/>}
   {love && <Love showDiv={showDiv}/>}
   {education && <Education showDiv={showDiv} />}
   {motivation && <Motivation showDiv={showDiv} />}
    </div>
  )
}

export default Therapy