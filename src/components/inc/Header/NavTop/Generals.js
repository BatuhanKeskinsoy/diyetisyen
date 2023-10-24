import React from 'react'
import Link from 'next/link'
import GeneralsData from '@/data/generals'
import { IoLocationOutline, IoPhonePortraitOutline, IoMailOutline } from 'react-icons/io5'

function NavTopGenerals(props) {

  return (
    <address className='font-open not-italic tracking-wide text-sm flex gap-x-4 h-full'>
      <div className="flex items-center gap-x-1">
        <Link href={props.GeneralsData.addressUrl} title={props.GeneralsData.address} target='_blank' className='flex items-center gap-x-1 group'>
          <IoLocationOutline size={22} className='text-site ' />
          <span className='group-hover:text-site transition-all'>{props.GeneralsData.address}</span>
        </Link>
      </div>
      <div className="flex items-center gap-x-1">
        <Link href={`tel:${props.phoneSlug}`} title={props.GeneralsData.phone} className='flex items-center gap-x-1 group'>
          <IoPhonePortraitOutline size={22} className='text-site' />
          <span className='group-hover:text-site transition-all'>{props.GeneralsData.phone}</span>
        </Link>
      </div>
      <div className="flex items-center gap-x-1">
        <Link href={`mailto:${props.GeneralsData.email}`} title={props.GeneralsData.email} className='flex items-center gap-x-1 group'>
          <IoMailOutline size={22} className='text-site' />
          <span className='group-hover:text-site transition-all'>{props.GeneralsData.email}</span>
        </Link>
      </div>
    </address>
  )
}

export default NavTopGenerals