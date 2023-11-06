import React from 'react'
import Image from 'next/image'
import SocialsData from '@/data/socials'
import generalsData from '@/data/generals'
import { AboutSocials } from '@/components/inc/Header/Items/SocialItem'
import Link from 'next/link'

function Hakkimda(props) {
  const phoneSlug = generalsData.phone.replace(/\s/g, '');
  return (
    <section className='relative z-10'>
      <div className='container mx-auto lg:py-24 py-8 flex lg:flex-row gap-x-28 lg:gap-y-0 gap-y-8 flex-col-reverse'>
        <div className='relative lg:w-[500px] lg:h-[500px] w-full h-[400px] lg:border-[20px] border-site lg:rounded-3xl  shadow-inner shadow-gray-600 group'>
            <Image
              src={'/profile/picture1.png'}
              sizes="(max-width: 768px) 100vw, 30vw"
              fill
              priority
              alt={generalsData.fullName}
              title={generalsData.fullName}
              className='object-cover object-center lg:rounded-3xl lg:ml-10 lg:mt-10 shadow-lg shadow-gray-300 group-hover:lg:ml-0 group-hover:lg:mt-0 group-hover:lg:scale-110 transition-all'
            />
        </div>
        <div className='flex-1 flex flex-col lg:gap-y-8 gap-y-6 lg:px-0 px-4'>
          <strong className='font-gemunu text-3xl opacity-50'>HAKKIMDA</strong>
          <h1 className='text-3xl lg:text-5xl font-dancing tracking-wide min-w-fit'>{generalsData.fullName}</h1>

          <p className='lg:text-lg text-md leading-8'>Merhaba, ben {generalsData.fullName}, {generalsData.graduationYear} yılında {generalsData.university} {generalsData.branch} bölümünden mezun oldum. Danışanlarıma, {generalsData.district}/{generalsData.city} bölgesinde bulunan ofisimde hizmet vermekteyim. Ulaşım ve randevu için <Link href="/hakkimda" className='text-site font-gemunu text-xl tracking-wider' title={`${generalsData.fullName} İletişim`}>İletişim</Link> bölümüne bakabilirsiniz.</p>

          <p className='lg:text-lg text-md leading-8'>{generalsData.city} diyetisyeni olarak sağlıklı yaşam konusunda güvenilir ve uzman diyetisyeni olarak sizlere hizmet vermekten mutluluk duyuyorum. Beslenme ve diyet konusunda uzmanlaşmış bir profesyonel olarak, kişisel hedeflerinize ulaşmanızda size rehberlik etmek için buradayım.</p>
          <p className='lg:text-lg text-md leading-8'>Ofisim dışında <Link href={'/online-diyet'} className='text-site font-gemunu text-xl tracking-wider' title='Online Diyet'>Online Diyet</Link> hizmeti de vermekteyim. Online diyet ücretleri ve diyetiyetisyen ücretleri hakkında daha fazla bilgi edinmek için bana
            <Link
              href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${generalsData.wpMessage}`}
              target='_blank'
              title='WhatsApp'
              className='text-site font-gemunu text-xl tracking-wider'> WhatsApp&#39;tan </Link> veya aşağıdaki sosyal medya bağlantılarımdan ulaşabilirsiniz. </p>

          <strong className='font-gemunu tracking-wide text-2xl'>Sosyal Medya Adreslerim</strong>
          <ul className='flex gap-6 flex-wrap'>
            {
              SocialsData.map((data, key) => (
                <AboutSocials socialUrl={data.socialUrl} socialName={data.socialName} iconName={data.iconName} key={key} />
              ))
            }
          </ul>
        </div>
      </div>

      {props.botTransparent && (
        <div className='bg-botTransparent w-full bg-bottom absolute top-full h-12'></div>
      )}
    </section>
  )
}

export default Hakkimda