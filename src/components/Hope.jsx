import React from 'react'
import { Star } from '@mui/icons-material'

function Hope(showDiv) {
  return (
    <div className='flex flex-col gap-5'>
    <strong className='mt-5'>Hope</strong>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <img src="artists/west.jpg" className='w-24 h-24 rounded-full object-cover' alt="" />
        <div className='bg-gradient-to-r from-green-950 to-slate-800 p-6 rounded'>
           <p> ... And my God won't deny me, tell the Devil, Get behind me, All the stars are aligned, lift me up every time, You know where to find me</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Kanye West</span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-200':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-blue-500 to-slate-600 p-6 rounded'>
           <p> It's a person that can see the bright side Through the dark times when there ain't one </p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~NF</span>
           </div>
        </div>
        <img src="artists/R.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center delay-300':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <img src="artists/kendrick.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        <div className='bg-gradient-to-r from-teal-950 to-lime-500 p-6 rounded'>
           <p> I got some regrets but my past wont keep me from my best several mistakes looks like life or death</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Kendrick</span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-500':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-red-950 to-slate-950 p-6 rounded'>
           <p> They told me my days are numbered but I keep waking up</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Drake</span>
           </div>
        </div>
        <img src="artists/drake.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        
    </div>
    
</div>
  )
}

export default Hope