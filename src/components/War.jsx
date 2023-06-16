import React from 'react'
import { Star } from '@mui/icons-material'

function War(showDiv) {
  return (
    <div className='flex flex-col gap-5'>
        <strong className='mt-5'>War</strong>
        <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
            <img src="artists/drake.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
            <div className='bg-gradient-to-r from-red-950 to-blue-950 p-6 rounded'>
               <p> I dont do well with people making makin' disses or makin' threats,...man got flown like private jets, for way, way less</p>
               <div className='flex justify-between'>
                <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
                <span>~Drake</span>
               </div>
            </div>
        </div>
        <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-200':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <div className='bg-gradient-to-r from-green-950 to-zinc-950 p-6 rounded'>
               <p> Siku zote kisichokuua kitakufanya uwe ngangari hata mwanga huwezi kumjua so uishi nao kwa tahadhari</p>
               <div className='flex justify-between'>
                <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
                <span>~Harmonize</span>
               </div>
            </div>
            <img src="artists/harmonize.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
            
        </div>
        <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex gap-3 items-center delay-300':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
            <img src="artists/kendrick.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
            <div className='bg-gradient-to-r from-amber-950 to-yellow-600 p-6 rounded'>
               <p> I'm a killer,he's a killer, she's a killer, We some killers,walkin zombies, tryna scratch that itch germophobic,hetero and homophobic</p>
               <div className='flex justify-between'>
                <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
                <span>~Kendrick</span>
               </div>
            </div>
        </div>
        <div className={showDiv?' transform translate-x-0 transition-transform  duration-500 ease-in-out flex justify-end gap-3 items-center delay-500':'transform  translate-x-full overlow-hidden transition-transform duration-500 ease-in-out'}>
        <div className='bg-gradient-to-r from-slate-950 to-violet-950 p-6 rounded'>
               <p> Now that I'm home, Back off the road We shut it down, Where it aint so, With checks in the streets, J number's 4</p>
               <div className='flex justify-between'>
                <span>{Array(5).fill().map((_,i)=><Star style={{color:'goldenrod'}} />)}</span>
                <span>~Travis Scott</span>
               </div>
            </div>
            <img src="artists/scott.jpeg" className='w-24 h-24 rounded-full object-cover' alt="" />
            
        </div>
        
    </div>
  )
}

export default War