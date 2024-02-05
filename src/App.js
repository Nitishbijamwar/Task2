import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
const [jsonData, setJsondata]=useState(null);


useEffect(()=>{
  const fetchData=async()=>{
    try {
      
    } catch (error) {
      
    }
  }
})

  return (
    <div>
      <div className='flex bg-white text-black w-full h-14  justify-between items-center'>
        <h1 className='text-2xl text-black mx-5'>Title</h1>
        <div className='flex space-x-4 mr-2'>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Blog</h1>
          <h1>Contact</h1>
        </div>
      </div>

      <div className='w-full bg-sky-800 h-60  text-center justify-between bg-gradient-to-r from-[#01DCFE] to-[#7043B2]'>
        <h1 className=' text-white text-4xl py-5'>TITLE</h1>
        <span className='text-white px-5 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quae atque optio amet sapiente totam mollitia nostrum nulla error ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum veritatis, reprehenderit aut quidem culpa saepe voluptatum nisi eveniet dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae corporis cum mollitia iure consectetur, facere exercitationem totam dignissimos quibusdam.</span>
        <div className='mt-4'><button className='bg-white p-2 rounded-xl '>Read More</button></div>
      </div>

      <div className='text-center mt-10'>
        <h1 className='text-black text-6xl'>CLASSES</h1>
        <span className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis consequuntur quis libero quibusdam atque amet illo nulla repellat labore.
        </span>
      </div>


      <div className='grid grid-col-1 sm:grid-cols-3 gap-2 justify-items-center my-10 text-white'>
        <div className='bg-slate-400 h-40 w-80 rounded-2xl p-2 text-center'>
          <img src="" alt="some image" className=''/>
          <h1>Content</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className='bg-slate-400 h-40 w-80 rounded-2xl p-2 text-center'>
          <img src="" alt="some image" className=''/>
          <h1>Content</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className='bg-slate-400 h-40 w-80 rounded-2xl p-2 text-center'>
          <img src="" alt="some image" className=''/>
          <h1>Content</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <div className='grid grid-col-1 sm:grid-cols-3 gap-2 justify-items-center mb-10 text-white'>
        <div className='bg-slate-400 h-40 w-80 rounded-2xl p-2 text-center'>
          <img src="" alt="some image" className=''/>
          <h1>Content</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className='bg-slate-400 h-40 w-80 rounded-2xl p-2 text-center'>
          <img src="" alt="some image" className=''/>
          <h1>Content</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className='bg-slate-400 h-40 w-80 rounded-2xl p-2 text-center'>
          <img src="" alt="some image" className=''/>
          <h1>Content</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>

      <div className='text-white text-center bg-slate-600 p-4'>
      <p className='text-2xl'>&copy; 2024 ALL RIGHTS RESERVED</p>
      </div>
 

    </div>
  )
}

export default App