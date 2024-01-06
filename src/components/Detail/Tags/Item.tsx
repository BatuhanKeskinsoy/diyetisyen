import React from 'react'
import Link from 'next/link'

interface ItemProps {
    tag: string;
}

function Item({ tag }: ItemProps) {
    return (
        <li className='flex gap-x-2 items-center'>
            <span className='text-site text-xl'>#</span>
            <Link href={''} title={tag} className='text-base text-gray-600 hover:text-black transition-all'>
                {tag}
            </Link>
        </li>
    )
}

export default Item