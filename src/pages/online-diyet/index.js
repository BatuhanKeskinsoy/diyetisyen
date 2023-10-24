import React from 'react'
import { OnlineDiyetDetail } from '@/components/Detail/Detail'
import blogsData from '@/data/blogs'
import Head from 'next/head'

function Page() {

    const Title = `Online Diyet | ${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const Description = `Online diyet, sağlıklı bir yaşam tarzı sürdürmek isteyenlere internet üzerinden diyetisyenlik hizmeti sunan bir yöntemdir. Bu hizmet, beslenme planları, diyet önerileri ve kilo kontrolü gibi konularda rehberlik almanızı sağlar. ${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const Keywords = ['online diyet', 'online diyet nedir', 'online diyet faydaları', 'online diyet ücretleri'].join(', ');
    const Robots = 'index, follow';
    const Images = '/theme/online-diyet.jpg';
    const URL = `/online-diyet`
    const Type = 'article'

    const metadata = {
        title: Title,
        description: Description,
        keywords: Keywords,
        robots: Robots,
        openGraph: {
            title: Title,
            description: Description,
            images: Images,
            url: URL,
            type: Type,
        }
    }

    return (
        <>
            <Head>

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