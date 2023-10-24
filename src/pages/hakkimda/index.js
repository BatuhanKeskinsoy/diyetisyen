import React from 'react'
import About from '@/components/About/About'
import generalsData from "@/data/generals"
import Head from 'next/head';

function Hakkimda() {

    const Title = `Hakkımda | ${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const Description = `${generalsData.fullName}, sağlıklı beslenme uzmanı olarak size ideal kiloya ve sağlıklı yaşama ulaşmanızda yardımcı olur. Bireysel beslenme planlarıyla destek verir.`;
    const Keywords = [`${generalsData.fullName}`, `${generalsData.fullName} kimdir`, `diyetisyen ${generalsData.fullName}`].join(', ');
    const Robots = 'index, follow';
    const Images = '/profile/picture1.png';
    const URL = `/hakkimda`
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
            <About />
        </>
    )
}

export default Hakkimda;