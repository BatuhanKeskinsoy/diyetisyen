import React, { useState, useEffect } from 'react'
import servicesData from '@/data/services'
import { useRouter } from 'next/router'
import { ServiceDetail } from '@/components/Detail/Detail'
import { redirect } from 'next/navigation'

function Hizmetlerimiz() {
  const router = useRouter()
  const { slug } = router.query

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      const filteredServices = servicesData.find(service => service.url === slug)

      if (filteredServices) {
        setData(filteredServices)
        setIsLoading(false)
      } else {
        redirect('/404');
      }
    }
  }, [slug])

  if (isLoading) {
    return <div className='w-full h-96 font-gemunu text-3xl flex items-center justify-center'>Yükleniyor...</div>
  }

  if (!data) {
    return null
  }

  return (
    <ServiceDetail
      title={data.title}
      image={data.image}
      contentText={data.contentText}
      description={data.description}
      tags={data.tags}
      url={data.url}
      showAllUrl={'/blog'}
    />
  )
}

export default Hizmetlerimiz
