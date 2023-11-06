import React from 'react';
import Image from 'next/image';
import { BsZoomIn } from 'react-icons/bs'

function Item(props) {
    const {
        openLightbox = props.openLightbox,
        image = props.image,
        alt = props.alt,
        key = props.key
    } = props

    return (
        <div className="sliderItem p-3">
            <div
                className='relative h-[400px] w-full bg-white flex justify-center items-center rounded-3xl shadow-lg shadow-gray-200 mb-2 cursor-pointer group overflow-hidden hover:scale-105 transition-all'
                onClick={() => openLightbox(key - 1)}
            >
                <div
                    className="opacity-0 group-hover:opacity-100 flex bg-site/30 absolute left-0 top-0 w-full h-full justify-center items-center text-4xl z-10 transition-all"
                >
                    <BsZoomIn size={60} className='text-white' />
                </div>
                <Image
                    src={image}
                    alt={alt}
                    title={alt}
                    fill
                    loading='lazy'
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className='rounded-3xl object-cover object-center'
                />
            </div>

            <div className='py-2 px-4 text-center text-lg'>{alt}</div>
        </div>
    );
}

export default Item;
