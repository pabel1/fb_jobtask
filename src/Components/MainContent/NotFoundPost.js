import React from 'react'

const NotFoundPost = () => {
  return (
    <div className='bg-white w-full rounded-md mt-5 text-center px-4 py-6 space-y-3'>
        <h1 className=' text-4xl font-semibold'>There are no Post Found!</h1>
        <p className=' text-xs text-[#5C5C5C]'>Keep checking back later or refresh to get more feeds!</p>

    </div>
  )
}

export default NotFoundPost