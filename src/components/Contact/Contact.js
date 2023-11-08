import React from 'react'
import GeneralsData from '@/data/generals'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa"
import SocialsData from '@/data/socials'
import { ContactSocials } from '../inc/Header/Items/SocialItem'
import { BsEnvelopeAt, BsSignpost2, BsTelephoneInbound } from 'react-icons/bs'

function Iletisim(props) {
    const phoneSlug = GeneralsData.phone.replace(/\s/g, '');

    return (
        <section className='relative z-10 w-full h-full flex lg:flex-row flex-col bg-gray-100'>
            <div className='w-full overflow-hidden flex-1' dangerouslySetInnerHTML={{ __html: GeneralsData.addressIframe }}></div>

            <div className="relative flex-1">
                <div className='lg:px-8 px-4 flex justify-center items-center h-full'>
                    <div className="flex flex-col w-full justify-between items-start gap-x-8  px-4 rounded-xl">
                        <div className="flex flex-col justify-between items-center lg:items-start w-full gap-y-8">
                            <div className="flex lg:flex-row flex-col gap-y-4 items-center lg:justify-between justify-center lg:mb-6 w-full lg:mt-0 mt-12">

                                {
                                    props.forHome ? (
                                        <h3 className='text-3xl lg:text-5xl font-dancing tracking-wider block font-normal'>İletişim</h3>
                                    ) : (
                                        <h1 className='text-4xl lg:text-6xl font-dancing tracking-wider block font-normal'>İletişim</h1>
                                    )
                                }
                                <Link
                                    href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${GeneralsData.wpMessage}`}
                                    target='_blank'
                                    title="WhatsApp'tan Ulaşın"
                                    className='flex items-center justify-between rounded-xl px-6 gap-x-2 transition-all bg-green-500 hover:bg-green-400 text-white py-3'>
                                    <FaWhatsapp size={32} className='cursor-pointer transition-all' />
                                    <span className='text-xl font-gemunu tracking-wide transition-all'>WhatsApp&#39;tan Ulaşın</span>
                                </Link>
                            </div>

                            <address className='font-open not-italic tracking-wide text-sm flex lg:flex-row flex-col gap-x-8 lg:gap-y-0 gap-y-8 h-full w-full'>
                                <Link
                                    href={GeneralsData.addressUrl}
                                    target='_blank'
                                    title={GeneralsData.address}
                                    className='flex flex-col items-center text-center justify-between gap-y-3 flex-1 w-full group overflow-hidden'>
                                    <BsSignpost2 size={60} className='text-customSecondary-400 group-hover:text-site transition-all' />
                                    <span className='lg:text-lg text-base p-4 text-gray-600'>{GeneralsData.address}</span>
                                    <div className="flex items-center gap-x-2 px-6 py-3 my-4 bg-white shadow-lg shadow-gray-200 group-hover:bg-site group-hover:text-white font-gemunu text-lg lg:text-xl tracking-wider min-w-fit rounded-lg transition-all w-full justify-center mx-auto">Haritada Gör</div>
                                </Link>


                                <Link
                                    href={`tel:${phoneSlug}`}
                                    title={GeneralsData.phone}
                                    className='flex flex-col items-center text-center justify-between gap-y-3 flex-1 w-full group overflow-hidden'>
                                    <BsTelephoneInbound size={60} className='text-customSecondary-400 group-hover:text-site transition-all' />
                                    <span className='lg:text-lg text-base p-4 text-gray-600'>{GeneralsData.phone}</span>
                                    <div className="flex items-center gap-x-2 px-6 py-3 my-4 bg-white shadow-lg shadow-gray-200 group-hover:bg-site group-hover:text-white font-gemunu text-lg lg:text-xl tracking-wider min-w-fit rounded-lg transition-all w-full justify-center mx-auto">Hemen Ara</div>
                                </Link>
                                <Link
                                    href={`mailto:${GeneralsData.email}`}
                                    title={GeneralsData.email}
                                    className='flex flex-col items-center text-center justify-between gap-y-3 flex-1 w-full group overflow-hidden'>
                                    <BsEnvelopeAt size={60} className='text-customSecondary-400 group-hover:text-site transition-all' />
                                    <span className='lg:text-lg text-base p-4 text-gray-600 break-all'>{GeneralsData.email}</span>
                                    <div className="flex items-center gap-x-2 px-6 py-3 my-4 bg-white shadow-lg shadow-gray-200 group-hover:bg-site group-hover:text-white font-gemunu text-lg lg:text-xl tracking-wider min-w-fit rounded-lg transition-all w-full justify-center mx-auto">Mail Gönder</div>
                                </Link>
                            </address>
                            <div className="lg:mb-0 mb-12 lg:mt-8">
                                {
                                    props.forHome ? (
                                        <h4 className='text-xl lg:text-2xl font-gemunu tracking-wider block my-8 lg:my-0 lg:mb-8 lg:text-left text-center'>Sosyal Medya</h4>
                                    ) : (
                                        <h2 className='text-3xl lg:text-4xl font-dancing tracking-wider block my-8 lg:my-0 lg:mb-8  lg:text-left text-center'>Sosyal Medya</h2>
                                    )
                                }
                                <ul className='flex gap-6 flex-wrap lg:justify-start justify-center'>
                                    {
                                        SocialsData.map((data, key) => (
                                            <ContactSocials socialUrl={data.socialUrl} socialName={data.socialName} iconName={data.iconName} key={key} />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Iletisim