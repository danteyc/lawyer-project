import React, { FunctionComponent } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";


export const Card: FunctionComponent = () => {
  return (
    <div className='w-full rounded-lg border border-[#3396D3] overflow-hidden'>
      <div className='w-full bg-[#3396D3] p-2'>
        <p className='text-lg font-bold'>Luis Dominguez</p>
      </div>
      <div className='flex justify-between p-2'>
        <div>
          <p className='text-sm flex items-center gap-1'><FaLocationDot/> <span>Arequipa</span></p>
          <p className='text-sm flex items-center gap-1'><FaMobileScreen/> <span>989 888 888</span></p>
        </div>
        <img className='rounded-full' width={60} src="https://headshots-inc.com/wp-content/uploads/2022/07/attorny-headshot-example-1.jpg" alt="" />

      </div>

    </div>
  )
}
