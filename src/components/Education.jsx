import React from 'react'
import { Star, Verified } from '@mui/icons-material'

function Education(showDiv) {
  return (
    <div className='flex flex-col gap-5'>
    <strong className='mt-5'>Education</strong>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <img src="artists/west.jpg" className='w-24 h-24 rounded-full object-cover' alt="" />
        <div className='bg-gradient-to-r from-blue-950 to-slate-600 p-6 rounded'>
           <p>Man Its too early what the hell you doing waking me up at 5:30? why the hell are you worried?</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Kanye West<Verified style={{color:'gold'}} /></span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-200':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-blue-500 to-slate-600 p-6 rounded'>
           <p> Thats when my thought can be dangerous,Thats when I put on my makeup and drown in self-hatred, Forget what I'm saying  </p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~NF<Verified style={{color:'cyan'}} /></span>
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
            <span>~Kendrick<Verified style={{color:'gold'}} /></span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-500':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-red-950 to-slate-950 p-6 rounded'>
           <p> They told me my days are numbered but I keep waking up</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Drake<Verified style={{color:'gold'}} /></span>
           </div>
        </div>
        <img src="artists/drake.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        
    </div>
    
</div>
  )
}

export default Education