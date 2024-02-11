import React from "react";
import servicesData from "@/data/services.json";
import { ServiceDetail } from "@/components/(front)/Detail/Detail";
import { Metadata } from "next";
import { metaHizmetlerimizDetay } from "@/meta";
import { notFound } from "next/navigation";
import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const service: any = servicesData.find((service) => service.url === slug);

  if (service) {
    return metaHizmetlerimizDetay(service, slug);
  } else {
    notFound();
  }
}

async function Page({ params }: { params: { slug: string } }) {
  const generals: GeneralsTypes = await getGenerals();
  const slug = params.slug;

  let metaFilteredServices = null;

  if (slug) {
    metaFilteredServices = servicesData.find((service) => service.url === slug);

    if (!metaFilteredServices) {
      notFound();
    }
  }

  const filteredServices = slug
    ? servicesData.find((service) => service.url === slug)
    : null;

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
      generals={generals}
    />
  );
}

export default Page;
