import React from 'react'
import { Star, Verified } from '@mui/icons-material'

function Love(showDiv) {
  return (
    <div className='flex flex-col gap-5'>
    <strong className='mt-5'>Love</strong>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <img src="artists/swift.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        <div className='bg-gradient-to-r from-pink-500 to-red-600 p-6 rounded'>
           <p>Is it cool that I said all that? Is it cool that you're in my head? Cause I know that it's delicate</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Taylor Swift<Verified style={{color:'gold'}} /></span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-200':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-blue-500 to-pink-600 p-6 rounded'>
           <p> Hakuna mwingine wa kumsikia kwenye masikio yangu... Mi amor nikuite jina gani baby, honey, mon amor  </p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Marioo<Verified style={{color:'grey'}} /></span>
           </div>
        </div>
        <img src="artists/marioo.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center delay-300':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <img src="artists/ayra.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
        <div className='bg-gradient-to-r from-pink-500 to-yellow-700 p-6 rounded'>
           <p> See the way I de beg you she Bambi allah Mo je ni, And you know say you fine too, All the girls go they find you</p>
           <div className='flex justify-between'>
            <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
            <span>~Ayra Star<Verified style={{color:'cyan'}} /></span>
           </div>
        </div>
    </div>
    <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-500':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
    <div className='bg-gradient-to-r from-red-950 to-pink-700 p-6 rounded'>
           <p> Kiki Do you love me? Are you riding? Say you will never ever leave from beside me,Cause I want ya and I need ya</p>
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

export default Love