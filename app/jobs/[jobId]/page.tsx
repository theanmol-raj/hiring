
import Job from '@/components/Job'
import React ,{ useState} from 'react'

function page({params : { jobId}} : { params : { jobId  : string}}) {
    
  return (
    <div className='flex-1 m-2 overflow-y-scroll scrollbar-hide  rounded-md md:rounded-xl'>
        <Job />
    </div>
  )
}

export default page