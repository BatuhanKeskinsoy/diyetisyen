import React from 'react'
import Image from 'next/image'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import Link from 'next/link'

interface BannerItemProps {
    title: string;
    image: string;
    isFirstItem: boolean;
    description: string;
    btnActive: boolean;
    btnUrl: string;
    btnText: string;
}

function Item({title, image, isFirstItem, description, btnActive, btnUrl, btnText} : BannerItemProps) {
    return (
        <div className='relative w-full'>
            <div className="lg:h-[calc(100vh-136px)] h-[calc(100vh-96px)] container mx-auto">
                <div className="bg-black-900 lg:bg-transparent lg:bg-gradient-to-r from-black absolute left-0 top-0 w-full h-full z-10 opacity-60"></div>
                <Image
                    src={image}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    alt={title}
                    title={title}
                    {...(isFirstItem && { priority: true })} 
                    className='object-cover object-center'
                />

                <div className='lg:absolute relative z-10 flex flex-col lg:items-start items-center justify-center h-full w-full lg:w-3/6 py-12 px-4 lg:px-0 text-center lg:text-left gap-y-8'>
                    <span className='text-white text-5xl lg:text-6xl font-dancing tracking-wide min-w-fit leading-[60px]'>{title}</span>
                    <p className='text-white text-lg lg:text-2xl'>{description}</p>
                    {btnActive && (
                        <div className="flex w-full justify-end">
                            <Link href={btnUrl} title={btnText} className='flex items-center gap-x-2 px-6 py-3 bg-white hover:bg-site hover:opacity-100 hover:text-white font-gemunu text-xl lg:text-2xl tracking-wider min-w-fit rounded-lg opacity-75 transition-all w-full lg:w-fit lg:justify-center justify-between'>
                                {btnText}
                                <AiOutlineDoubleRight />
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Item