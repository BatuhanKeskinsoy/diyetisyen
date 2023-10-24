import React from 'react'
import Image from 'next/image'

function Item(props) {
    return (
        <div className="sliderItem p-3">
            <div className='relative h-[500px] w-full bg-white flex justify-center items-center rounded-3xl shadow-lg shadow-gray-400'>
                <Image
                    src={props.image}
                    alt={props.alt}
                    title={props.alt}
                    fill
                    loading='lazy'
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className='rounded-3xl object-cover object-center' />
            </div>
        </div>
    )
}

export default Item