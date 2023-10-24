import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function OtherContentsItem(props) {
    return (
        <li className='group border-b last:border-none py-3'>
            <Link href={props.url} title={props.title} className='rounded-xl overflow-hidden w-full flex gap-x-3'>
                <div className="flex relative min-w-[6rem] w-[6rem] h-24 group-hover:min-w-[6.5rem] group-hover:w-[6.5rem] transition-all">
                    <Image 
                    src={props.image}
                        fill
                        loading='lazy'
                        sizes='(max-width: 768px) 100vw, 100vw'
                        alt={props.title}
                        title={props.title}
                        className='object-cover object-center transition-all' />
                </div>
                <div className="flex flex-col items-start justify-start flex-auto">
                    <h4 className='my-1 text-lg tracking-wide font-gemunu line-clamp-1 font-semibold group-hover:text-site transition-all'>{props.title}</h4>
                    <p className='text-sm line-clamp-2 text-gray-600 transition-all'>{props.description}</p>
                </div>
            </Link>
        </li>
    )
}

export default OtherContentsItem