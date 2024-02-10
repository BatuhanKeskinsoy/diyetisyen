import React from 'react'
import servicesData from '@/data/services.json'
import { ServiceDetail } from '@/components/(front)/Detail/Detail'
import { Metadata } from 'next';
import { metaHizmetlerimizDetay } from '@/meta';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const calculation: any = servicesData.find((service) => service.url === slug);

  return metaHizmetlerimizDetay(calculation, slug);
}

function Page({ params }: { params: { slug: string } }) {
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

  const filteredServices = slug ? servicesData.find(service => service.url === slug) : null

  if (!filteredServices) {
    return null;
  }

  return (
      <ServiceDetail
        title={filteredServices.title}
        image={filteredServices.image}
        contentText={filteredServices.contentText}
        description={filteredServices.description}
        tags={filteredServices.tags}
        url={filteredServices.url}
        showAllUrl={'/blog'}
      />
  )
}

export default Page
