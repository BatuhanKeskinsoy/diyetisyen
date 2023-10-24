import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import Link from 'next/link'
import GeneralsData from '@/data/generals'

function NavTopWhatsApp(props) {
    return (
        <Link
            href={`https://api.whatsapp.com/send?phone=+9${props.phoneSlug}&text=${props.GeneralsData.wpMessage}`}
            target='_blank'
            title='WhatsApp'
            className='h-full flex items-center justify-center px-4 gap-x-2 bg-green-500 hover:bg-green-400 transition-all'>
            <FaWhatsapp size={18} className='text-white cursor-pointer transition-all' />
            <span className='text-sm text-white'>WhatsApp</span>
        </Link>
    )
}

export default NavTopWhatsApp