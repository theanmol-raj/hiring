import JobCard from '@/components/JobCard'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className=''>
        <div className='hidden md:block pt-24 lg:pt-48 bg-yellow-400'><h1 className=' text-3xl text-center font-semibold text-white dark:text-black '>Job Vacancies</h1></div>
        <div className='hidden md:block shape' />
        <div className=" hidden md:grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>

        </div>
        <div className='overflow-y-scroll md:hidden'>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
        </div>
    </div>
  )
}

export default page