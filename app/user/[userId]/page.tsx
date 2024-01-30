
import Profile from '@/components/Profile'
import React ,{ useState} from 'react'

function page({params : { userId}} : { params : { userId  : string}}) {
    
  return (
    <div className='flex-1 m-2 overflow-y-scroll scrollbar-hide  rounded-md md:rounded-xl'>
        <Profile />
    </div>
  )
}

export default page