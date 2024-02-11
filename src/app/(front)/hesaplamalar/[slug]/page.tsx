import React from "react";
import calculationsData from "@/data/calculations.json";
import { CalculateDetail } from "@/components/(front)/Detail/Detail";
import IdealKiloHesaplama from "@/components/(front)/Calculations/IdealKiloHesaplama";
import VucutKitleIndeksiHesaplama from "@/components/(front)/Calculations/VucutKitleIndeksiHesaplama";
import BazalMetabolizmaHiziHesaplama from "@/components/(front)/Calculations/BazalMetabolizmaHiziHesaplama";
import { Metadata } from "next";
import { metaHesaplamalarDetay } from "@/meta";
import { notFound } from "next/navigation";
import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const calculation: any = calculationsData.find(
    (calculation) => calculation.url === slug
  );
  if (calculation) {
    return metaHesaplamalarDetay(calculation, slug);
  } else {
    notFound();
  }
}

async function Page({ params }: { params: { slug: string } }) {
  const generals: GeneralsTypes = await getGenerals();
  const slug = params.slug;

  let metaFilteredCalculations = null;

  if (slug) {
    metaFilteredCalculations = calculationsData.find(
      (calculation) => calculation.url === slug
    );

    if (!metaFilteredCalculations) {
      notFound();
    }
  }

  const filteredCalculations = calculationsData.find(
    (calculation) => calculation.url === slug
  );

  if (!filteredCalculations) {
    return null;
  }

  let CalculationComponent;
  switch (filteredCalculations.calculateComponent) {
    case "IdealKiloHesaplama":
      CalculationComponent = IdealKiloHesaplama;
      break;
    case "VucutKitleIndeksiHesaplama":
      CalculationComponent = VucutKitleIndeksiHesaplama;
      break;
    case "BazalMetabolizmaHiziHesaplama":
      CalculationComponent = BazalMetabolizmaHiziHesaplama;
      break;
    default:
      CalculationComponent = null;
  }

  return (
    <CalculateDetail
      title={filteredCalculations.title}
      image={filteredCalculations.image}
      contentText={filteredCalculations.contentText}
      description={filteredCalculations.description}
      tags={filteredCalculations.tags}
      url={filteredCalculations.url}
      calculationComponent={
        CalculationComponent ? (
          <CalculationComponent
            image={filteredCalculations.image}
            title={filteredCalculations.title}
          />
        ) : null
      }
      generals={generals}
    />
  );
}

export default Page;
