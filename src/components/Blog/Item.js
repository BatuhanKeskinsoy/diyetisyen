import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Item(props) {
    return (
            <div className="w-full lg:w-1/2 xl:w-1/3 lg:p-4">
                <div className="h-96 flex items-center relative justify-center shadow-xl shadow-gray-200 rounded-xl">
                    <Image
                        src={props.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        loading='lazy'
                        alt={props.title}
                        title={props.title}
                        className='object-cover object-center rounded-xl'
                    />
                    <Link
                        href={`/blog/${props.url}`}
                        title={props.title}
                        className="absolute bottom-0 w-full left-0 p-5 bg-gradient-to-t from-black/70 hover:bg-gray-950/50 rounded-xl h-full flex flex-col  justify-end text-white transition-all group text-center"
                    >
                        {
                            props.forHome ? (
                                <h3 className='font-gemunu text-2xl tracking-wider mb-2 group-hover:-translate-y-4 transition-all line-clamp-1 group-hover:line-clamp-none text-white'>{props.title}</h3>
                            ) : props.pathnameBlog == '/blog' ? (
                                <h2 className='font-gemunu text-2xl tracking-wider mb-2 group-hover:-translate-y-4 transition-all line-clamp-1 group-hover:line-clamp-none text-white'>{props.title}</h2>
                            ) : (
                                <h1 className='font-gemunu text-2xl tracking-wider mb-2 group-hover:-translate-y-4 transition-all line-clamp-1 group-hover:line-clamp-none text-white'>{props.title}</h1>
                            )
                        }
                        <p className='text-md transition-all group-hover:-translate-y-4 line-clamp-2 group-hover:line-clamp-none'>{props.description}</p>
                        <div className="text-xl text-site py-2 px-4 hidden group-hover:flex justify-center items-center">Devamını Oku</div>
                    </Link>
                    {props.isRecipe && (
                        <div className='absolute -left-5 top-5 right-auto rounded-xl rounded-bl-none py-3 px-6 bg-site text-white z-10 before:content-[""] before:absolute before:w-5 before:h-5 before:-bottom-5 before:left-0 before:bg-site/90 before:opacity-50 before:clip-your-needful-style'>
                            <span className='text-xl font-gemunu tracking-wider'>TARİF</span>
                        </div>
                    )}
                </div>
            </div>
    )
}

function FooterItem(props) {
    return (
        <li>
            <Link href={`/blog/${props.url}`} title={props.title} className='flex items-center gap-x-2 group'>
                <div className="h-12 w-20 relative flex-none">
                    <Image
                        src={props.image}
                        sizes="(max-width: 768px) 50vw, 10vw"
                        fill
                        loading='lazy'
                        alt={props.title}
                        title={props.title}
                        className='object-cover object-center rounded-md'
                    />
                </div>
                <span className='font-gemunu text-lg tracking-wider mb-0 flex-1 transition-all line-clamp-2 group-hover:text-site'>{props.title}</span>
            </Link>
        </li>
    )
}

export { Item, FooterItem }