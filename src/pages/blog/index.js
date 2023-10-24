import React from 'react'
import Blog from '@/components/Blog/Blog'
import generalsData from '@/data/generals'
import Head from 'next/head'

function BlogPage() {
    const Title = `Blog | ${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const Description = `${generalsData.fullName} beslenme, sağlıklı yaşam ve kilo yönetimi konularında uzman içeriklerini burada bulabilirsiniz. En yeni beslenme trendlerini, ipuçlarını ve tarifleri keşfedin, sağlıklı bir yaşam için bilinçli beslenme hakkında daha fazla bilgi edinin.`;
    const Keywords = [`${generalsData.fullName} iletişim`, `${generalsData.fullName} ofis`, `diyetisyen ${generalsData.fullName}`].join(', ');
    const Robots = 'index, follow';
    const Images = '/profile/picture1.png';
    const URL = `/blog`
    const Type = 'website'

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
            <Blog />
        </>
    )
}

export default BlogPage