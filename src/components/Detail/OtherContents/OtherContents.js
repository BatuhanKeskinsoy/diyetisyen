import React from 'react'
import OtherContentsItem from './Item'
import blogsData from '@/data/blogs'
import Link from 'next/link'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import Tags from '../Tags/Tags'

function OtherContents(props) {

    const filteredBlogsData = blogsData.filter((blogItem) => blogItem.title != props.title).slice(0, 8).sort((a, b) => b.id - a.id)

    return (

        <div className='gap-y-2 w-full flex flex-col overflow-hidden'>
            <span className='font-dancing tracking-wide text-3xl mt-12 mb-2'>Bloglarımız</span>
            <ul className='w-full flex flex-col'>

                {
                    filteredBlogsData.length > 0 ? (
                        filteredBlogsData.map((blogItem, key) => (
                            <OtherContentsItem
                                url={`/blog/${blogItem.url}`}
                                image={blogItem.image}
                                title={blogItem.title}
                                description={blogItem.description}
                                showAllUrl={'/blog'}
                                key={key}
                            />
                        ))
                    ) : null
                }

            </ul>
            <Link href={props.showAllUrl} title='Tüm Bloglar' className='py-2 px-4 justify-between text-gray-600 w-full flex items-center hover:bg-site hover:text-white transition-all shadow-md shadow-gray-200 rounded-xl mb-2'>
                <span className='text-lg font-semibold'>Tümünü Göster</span>
                <AiOutlineDoubleRight size={26} />
            </Link>

            <Tags tags={props.tags} />

        </div>
    )
}

export default OtherContents