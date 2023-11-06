import React from 'react'
import calculationsData from '@/data/calculations'
import { CalculateDetail } from '@/components/Detail/Detail'
import { useRouter } from 'next/router'
import IdealKiloHesaplama from '@/components/Calculations/IdealKiloHesaplama'
import VucutKitleIndeksiHesaplama from '@/components/Calculations/VucutKitleIndeksiHesaplama'
import BazalMetabolizmaHiziHesaplama from '@/components/Calculations/BazalMetabolizmaHiziHesaplama'
import { MetaHesaplamalarDetay } from '@/meta/metaHesaplamalarDetay'

function Hesaplamalar({ metaFilteredCalculations }) {
  const router = useRouter()
  const { slug } = router.query

  const filteredCalculations = calculationsData.find(calculation => calculation.url === slug)

  if (!filteredCalculations) {
    return null;
  }

  let CalculationComponent;
  switch (filteredCalculations.calculateComponent) {
    case 'IdealKiloHesaplama':
      CalculationComponent = IdealKiloHesaplama;
      break;
    case 'VucutKitleIndeksiHesaplama':
      CalculationComponent = VucutKitleIndeksiHesaplama;
      break;
    case 'BazalMetabolizmaHiziHesaplama':
      CalculationComponent = BazalMetabolizmaHiziHesaplama;
      break;
    default:
      CalculationComponent = null;
  }

  return (

    <>
      <MetaHesaplamalarDetay slug={slug} data={metaFilteredCalculations} />

      <CalculateDetail
        title={filteredCalculations.title}
        image={filteredCalculations.image}
        contentText={filteredCalculations.contentText}
        description={filteredCalculations.description}
        tags={filteredCalculations.tags}
        url={filteredCalculations.url}
        showAllUrl={'/blog'}
        calculationComponent={<CalculationComponent image={filteredCalculations.image} title={filteredCalculations.title} />}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  let metaFilteredCalculations = null;

  if (slug) {
    metaFilteredCalculations = calculationsData.find(calculation => calculation.url === slug);

    if (!metaFilteredCalculations) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {
      metaFilteredCalculations,
    },
  };
}

export default Hesaplamalar