import React from 'react'
import Contact from '@/components/Contact/Contact'
import generalsData from "@/data/generals"
import Head from 'next/head'

function Iletisim() {

    const Title = `İletişim | ${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const Description = `${generalsData.fullName} ile iletişime geçmek, sorularınızı sormak, randevu almak veya danışmanlık hizmetleri hakkında daha fazla bilgi edinmek için iletişim sayfamızı kullanın. Size sağlıklı bir yaşam için rehberlik etmek için buradayız.`;
    const Keywords = [`${generalsData.fullName} iletişim`, `${generalsData.fullName} ofis`, `diyetisyen ${generalsData.fullName}`].join(', ');
    const Robots = 'index, follow';
    const Images = '/profile/picture1.png';
    const URL = `/iletisim`
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
            <Contact />
        </>
    )
}

export default Iletisim