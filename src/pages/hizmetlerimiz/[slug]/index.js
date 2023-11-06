import React from 'react'
import servicesData from '@/data/services'
import { useRouter } from 'next/router'
import { ServiceDetail } from '@/components/Detail/Detail'
import { MetaHizmetlerDetay } from '@/meta/metaHizmetlerDetay'

function Hizmetlerimiz({ metaFilteredServices }) {
  const router = useRouter()
  const { slug } = router.query

  const filteredServices = slug ? servicesData.find(service => service.url === slug) : null

  if (!filteredServices) {
    return null;
  }

  return (
    <>
      <MetaHizmetlerDetay slug={slug} data={metaFilteredServices} />

      <ServiceDetail
        title={filteredServices.title}
        image={filteredServices.image}
        contentText={filteredServices.contentText}
        description={filteredServices.description}
        tags={filteredServices.tags}
        url={filteredServices.url}
        showAllUrl={'/blog'}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  let metaFilteredServices = null;

  if (slug) {
    metaFilteredServices = servicesData.find(service => service.url === slug);

    if (!metaFilteredServices) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {
      metaFilteredServices,
    },
  };
}

export default Hizmetlerimiz
