import React from "react";
import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";
import CalculateDetailContent from "./Details/CalculateDetailContent";
import ServiceDetailContent from "./Details/ServiceDetailContent";
import BlogDetailContent from "./Details/BlogDetailContent";
import OnlineDiyetDetailContent from "./Details/OnlineDiyetDetailContent";

async function CalculateDetail(props: any) {
  const generals: GeneralsTypes = await getGenerals();
  return <CalculateDetailContent props={props} generals={generals} />;
}

async function ServiceDetail(props: any) {
  const generals: GeneralsTypes = await getGenerals();
  return <ServiceDetailContent props={props} generals={generals} />;
}

async function BlogDetail(props: any) {
  const generals: GeneralsTypes = await getGenerals();
  return <BlogDetailContent props={props} generals={generals} />;
}

function OnlineDiyetDetail(props: any, generals: GeneralsTypes) {
  return <OnlineDiyetDetailContent props={props} generals={generals} />;
}

export { BlogDetail, OnlineDiyetDetail, ServiceDetail, CalculateDetail };
