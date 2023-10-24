import React from 'react'
import GeneralsData from '@/data/generals'
import Link from 'next/link'
import { IoLocationOutline, IoPhonePortraitOutline, IoMailOutline } from 'react-icons/io5'
import { CiFacebook, CiTwitter, CiYoutube, CiInstagram } from "react-icons/ci"
import { FaWhatsapp } from "react-icons/fa"
import SocialsData from '@/data/socials'
import { ContactSocials } from '../inc/Header/Items/SocialItem'
import Image from 'next/image'

function Iletisim(props) {
    const phoneSlug = GeneralsData.phone.replace(/\s/g, '');

    return (
        <section className='relative z-10 w-full h-full'>
            <div className="relative lg:py-24">
                <Image
                    src={'/theme/contact.png'}
                    fill
                    loading='lazy'
                    sizes="(max-width: 768px) 100vw, 100vw"
                    alt={`${GeneralsData.fullName} iletişim`}
                    title={`${GeneralsData.fullName} iletişim`}
                    className='object-cover object-center -z-30'
                />
                <div className="bg-black-900 lg:bg-transparent lg:bg-gradient-to-b from-black absolute left-0 top-0 w-full h-full -z-20 opacity-60"></div>
                <div className='container mx-auto lg:p-12 py-8'>
                    <div className="flex lg:flex-row flex-col px-4 w-full justify-between items-start gap-x-8">
                        <div className="flex flex-col justify-between items-center lg:items-start w-full">
                            {
                                props.forHome ? (
                                    <h3 className='text-4xl lg:text-6xl font-dancing tracking-wider mb-12 block text-white font-normal'>İletişim</h3>
                                ) : (
                                    <h1 className='text-4xl lg:text-6xl font-dancing tracking-wider mb-12 block text-white font-normal'>İletişim</h1>
                                )
                            }

                            <address className='font-open not-italic tracking-wide text-sm flex lg:flex-row flex-col gap-x-8 lg:gap-y-0 gap-y-8 h-full w-full'>
                                <Link
                                    href={GeneralsData.addressUrl}
                                    target='_blank'
                                    title={GeneralsData.address}
                                    className='flex flex-col items-center justify-between text-center gap-y-3 rounded-2xl shadow-lg bg-customPrimary-900/70 shadow-black/50 flex-1 w-full group overflow-hidden'
                                >
                                    <IoLocationOutline size={80} className='text-site mt-6' />
                                    <span className='lg:text-xl text-lg p-4 text-white'>{GeneralsData.address}</span>
                                    <div className="border-t border-gray-700 group-hover:border-transparent w-full py-4 font-gemunu tracking-wide text-2xl group-hover:bg-site text-site group-hover:text-gray-200 transition-all">Haritalarda Gör</div>
                                </Link>


                                <Link
                                    href={`tel:${phoneSlug}`}
                                    title={GeneralsData.phone}
                                    className='flex flex-col items-center text-center justify-between gap-y-3 rounded-2xl shadow-lg bg-customPrimary-900/70 shadow-black/50 flex-1 w-full group overflow-hidden'>
                                    <IoPhonePortraitOutline size={80} className='text-site mt-6' />
                                    <span className='lg:text-xl text-lg p-4 text-white'>{GeneralsData.phone}</span>
                                    <div className="border-t border-gray-700 group-hover:border-transparent w-full py-4 font-gemunu tracking-wide text-2xl group-hover:bg-site text-site group-hover:text-gray-200 transition-all">Hemen Ara</div>
                                </Link>
                                <Link
                                    href={`mailto:${GeneralsData.email}`}
                                    title={GeneralsData.email}
                                    className='flex flex-col items-center justify-between text-center gap-y-3 rounded-2xl shadow-lg bg-customPrimary-900/70 shadow-black/50 flex-1 w-full group overflow-hidden'>
                                    <IoMailOutline size={80} className='text-site mt-6' />
                                    <span className='lg:text-xl text-lg p-4 text-white break-all'>{GeneralsData.email}</span>
                                    <div className="border-t border-gray-700 group-hover:border-transparent w-full py-4 font-gemunu tracking-wide text-2xl group-hover:bg-site text-site group-hover:text-gray-200 transition-all">Mail Gönder</div>
                                </Link>
                            </address>
                        </div>
                        <div className='flex flex-col lg:w-fit lg:min-w-max w-full lg:my-0 my-8  text-white'>
                            <div className='lg:shadow-lg lg:p-8 rounded-xl w-full min-w-max px-8 bg-customPrimary-900/70 pb-4 shadow-lg shadow-black/50'>
                                {
                                    props.forHome ? (
                                        <h4 className='text-3xl lg:text-4xl font-dancing tracking-wider block my-8 lg:my-0 lg:mb-8  text-white lg:text-left text-center'>Sosyal Medya</h4>
                                    ) : (
                                        <h2 className='text-3xl lg:text-4xl font-dancing tracking-wider block my-8 lg:my-0 lg:mb-8  text-white lg:text-left text-center'>Sosyal Medya</h2>
                                    )
                                }

                                <ul className='flex flex-col gap-y-4'>
                                    {
                                        SocialsData.map((data, key) => (
                                            <ContactSocials socialUrl={data.socialUrl} socialName={data.socialName} iconName={data.iconName} key={key} />
                                        ))
                                    }
                                </ul>
                            </div>
                            <Link
                                href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${GeneralsData.wpMessage}`}
                                target='_blank'
                                title="WhatsApp'tan Ulaşın"
                                className='flex items-center justify-between rounded-xl lg:mt-4 mt-8 py-4 px-6 gap-x-2 w-full bg-customPrimary-900/70 transition-all group'>
                                <FaWhatsapp size={32} className='cursor-pointer group-hover:text-site transition-all' />
                                <span className='text-2xl font-gemunu tracking-wide group-hover:text-site transition-all'>WhatsApp&#39;tan Ulaşın</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {!props.forHome && (
                <div className='w-full overflow-hidden' dangerouslySetInnerHTML={{ __html: GeneralsData.addressIframe }}></div>
            )
            }
        </section>
    )
}

export default Iletisim