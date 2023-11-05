import React from 'react'
import Head from 'next/head'
import { OnlineDiyetDetail } from '@/components/Detail/Detail'
import blogsData from '@/data/blogs'
import { MetaOnlineDiyet } from '@/meta/metaOnlineDiyet'

function Page() {
    return (
        <>
            <MetaOnlineDiyet />
            <OnlineDiyetDetail
                title={blogsData.title}
                image={blogsData.image}
                description={blogsData.description}
                tags={blogsData.tags}
                url={blogsData.url}
                showAllUrl={'/blog'}
            />
        </>
    )
}

export default Page