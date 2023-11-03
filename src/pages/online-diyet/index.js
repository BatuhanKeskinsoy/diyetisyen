import React from 'react'
import Head from 'next/head'
import { OnlineDiyetDetail } from '@/components/Detail/Detail'
import blogsData from '@/data/blogs'

function Page() {

    const metaData = {
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
        Title: `Online Diyet | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        Description: `Online diyet, sağlıklı bir yaşam tarzı sürdürmek isteyenlere internet üzerinden diyetisyenlik hizmeti sunan bir yöntemdir. Bu hizmet, beslenme planları, diyet önerileri ve kilo kontrolü gibi konularda rehberlik almanızı sağlar. ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        Keywords: ['online diyet', 'online diyet nedir', 'online diyet faydaları', 'online diyet ücretleri'].join(', '),
        Images: '/theme/online-diyet.jpg',
        Url: `/online-diyet`,
        Type: 'article'
    }

    return (
        <>
            <Head>
                <title>{metaData.Title}</title>
                <meta name="description" content={metaData.Description} />
                <meta name="keywords" content={metaData.Keywords} />
                <meta property="og:image" content={`${metaData.siteUrl}${metaData.Images}`} />
            </Head>
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