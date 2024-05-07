import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center w-full' >
          <h1 className='text-3xl'>Counter APP</h1>
          <div className='flex items-center justify-center border-4 rounded-xl w-6/12 basis-1/3 '>
                <div className='flex items-center flex-col justify-centere'> 
                  <label className='pb-8' htmlFor=""> 0 </label>
                  <div className='flex gap-2'>
                    <button className='border-4 border-green-300 rounded w-24 bg-green-500 hover:bg-green-600'>Inc</button>
                    <button className='border-4 rounded w-24 border-blue-200 bg-blue-500 hover:bg-blue-700' > Save</button>
                  </div>
                  <h1>Result:</h1>
                </div>
          </div>
      </div>
    </>
  )
}

export default App
