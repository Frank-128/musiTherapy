import React from 'react'
import { Star, Verified } from '@mui/icons-material'
function Control(showDiv) {
  return (
    <div className='flex flex-col gap-5'>
    <strong className='mt-5'>Control</strong>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <img src="artists/cole.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        <div className='bg-gradient-to-r from-slate-950 to-red-800 p-6 rounded'>
           <p> The good news is nigga you came a long way ,the bad news is,nigga you went the wrong way, think being broke was better</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~J Cole <Verified style={{color:"gold"}}/></span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-200':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-yellow-700 to-purple-600 p-6 rounded'>
           <p> I know some kids wanna hurt theyself stop tryna take drugs, I refer to myself tryna better myself, tryna better my health </p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Lil Durk <Verified style={{color:'cyan'}}/></span>
           </div>
        </div>
        <img src="artists/durk.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center delay-300':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <img src="artists/kendrick.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        <div className='bg-gradient-to-r from-indigo-900 to-orange-950 p-6 rounded'>
           <p> I dont love people enough to put my faith in man, I put my faith in these lyrics hoping I make a band</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Kendrick <Verified style={{color:'gold'}}/></span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-500':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-blue-700 to-lime-600 p-6 rounded'>
           <p> Sihitaji Mwijaku , H wala Baba Levo akinipenda Mungu inatosha</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Harmonize <Verified style={{color:'cyan'}}/></span>
           </div>
        </div>
        <img src="artists/harmonize.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        
    </div>
    
</div>
  )
}

export default Control