import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'
import GeneralsData from '@/data/generals.json'

function OnlineDiyet() {
    const phoneSlug = GeneralsData.phone.replace(/\s/g, '');
    return (
        <div className='lg:pt-20 lg:pb-32 pt-12 pb-16 relative bg-black-900/70 overflow-hidden'>
            <Image
                src={'/theme/online-diyet-component.jpg'}
                sizes='(max-width: 768px) 100vw, 100vw'
                fill
                loading='lazy'
                alt={'Online Diyet'}
                title={'Online Diyet'}
                className='object-cover object-center -z-10 blur-sm' />
            <div className="container mx-auto px-4 text-gray-200 flex flex-col gap-y-6">
                <span className='font-dancing tracking-wide lg:text-6xl text-5xl mb-2 block text-white'>Online Diyet</span>
                <p className='lg:text-2xl text-xl'>Siz de sağlıklı bir yaşam için adım atmak istiyor musunuz? Daha fazla zaman kaybetmeyin, sağlığınızı önemseyin ve hayalinizdeki forma ulaşmak için harekete geçin!</p>
                <p className='lg:text-2xl text-xl'>Online diyet hizmeti veya diğer hizmetler hakkında daha fazla bilgi almak için aşağıdaki butonlardan bana ulaşabilirsiniz.</p>
                <address className="flex flex-wrap lg:flex-row flex-col gap-6 not-italic">
                    <Link
                        href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${GeneralsData.wpMessage}`}
                        target='_blank'
                        title="WhatsApp'tan Mesaj Gönderin"
                        className='flex items-center justify-between rounded-xl lg:w-fit w-full py-4 lg:px-6 px-4 gap-x-2 bg-green-500 hover:bg-green-400 transition-all'
                    >
                        <FaWhatsapp className='text-white cursor-pointer transition-all lg:text-4xl text-3xl' />
                        <span className='lg:text-2xl text-xl font-gemunu tracking-wide text-white'>WhatsApp&#39;tan Mesaj Gönderin</span>
                    </Link>
                    <Link
                        href={`tel:${phoneSlug}`}
                        title="Hemen Arayın"
                        className='flex items-center justify-between rounded-xl lg:w-fit w-full py-4 lg:px-6 px-4 gap-x-2 bg-blue-500 hover:bg-blue-400 transition-all'
                    >
                        <IoPhonePortraitOutline className='text-white cursor-pointer transition-all lg:text-4xl text-3xl' />
                        <span className='lg:text-2xl text-xl font-gemunu tracking-wide text-white'>Hemen Arayın</span>
                    </Link>
                    <Link
                        href={`mailto:${GeneralsData.email}`}
                        title="E-Mail Gönderin"
                        className='flex items-center justify-between rounded-xl lg:w-fit w-full py-4 lg:px-6 px-4 gap-x-2 bg-orange-500 hover:bg-orange-400 transition-all'
                    >
                        <IoMailOutline className='text-white cursor-pointer transition-all lg:text-4xl text-3xl' />
                        <span className='lg:text-2xl text-xl font-gemunu tracking-wide text-white'>E-Mail Gönderin</span>
                    </Link>
                </address>
            </div>
        </div>
    )
}

export default OnlineDiyet