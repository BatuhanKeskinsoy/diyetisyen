import React from 'react'
import Link from 'next/link'

function Item(props) {
    return (
        <li className='flex gap-x-2 items-center'>
            <span className='text-site text-xl'>#</span>
            <Link href={''} title={props.tag} className='text-base text-gray-600 hover:text-black transition-all'>
                {props.tag}
            </Link>
        </li>
    )
}

export default Item