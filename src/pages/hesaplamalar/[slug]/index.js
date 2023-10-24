import React, { useState, useEffect } from 'react'
import calculationsData from '@/data/calculations'
import { CalculateDetail } from '@/components/Detail/Detail'
import { useRouter } from 'next/router'
import IdealKiloHesaplama from '@/components/Calculations/IdealKiloHesaplama'
import VucutKitleIndeksiHesaplama from '@/components/Calculations/VucutKitleIndeksiHesaplama'
import BazalMetabolizmaHiziHesaplama from '@/components/Calculations/BazalMetabolizmaHiziHesaplama'

function Hesaplamalar() {
    const router = useRouter()
    const { slug } = router.query

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    
  useEffect(() => {
    if (slug) {
      const filteredCalculations = calculationsData.find(calculation => calculation.url === slug)

      if (filteredCalculations) {
        setData(filteredCalculations)
        setIsLoading(false)
      } else {
        // Navigate to the 404 page manually
        router.push('/404')
      }
    }
  }, [slug])




    if (isLoading) {
        return <div className='w-full h-96 font-gemunu text-3xl flex items-center justify-center'>Yükleniyor...</div>;
    }

    if (!data) {
        return null;
    }

    let CalculationComponent;
    switch (data.calculateComponent) {
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
        <CalculateDetail
            title={data.title}
            image={data.image}
            contentText={data.contentText}
            description={data.description}
            tags={data.tags}
            url={data.url}
            showAllUrl={'/blog'}
            calculationComponent={<CalculationComponent image={data.image} title={data.title} />}
        />
    )
}

export default Hesaplamalar