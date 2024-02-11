import React from "react";
import { BlogsTypes, GeneralsTypes } from "@/Types";
import CalculateDetailContent from "./Details/CalculateDetailContent";
import ServiceDetailContent from "./Details/ServiceDetailContent";
import BlogDetailContent from "./Details/BlogDetailContent";
import OnlineDiyetDetailContent from "./Details/OnlineDiyetDetailContent";

async function CalculateDetail(props: any, generals: GeneralsTypes) {
  return <CalculateDetailContent props={props} generals={generals} />;
}

async function ServiceDetail(props: any, generals: GeneralsTypes) {
  return <ServiceDetailContent props={props} generals={generals} />;
}

async function BlogDetail({ showAllUrl, generals, blog }: { showAllUrl: string; generals: GeneralsTypes; blog: BlogsTypes }) {
  return <BlogDetailContent showAllUrl={showAllUrl} generals={generals} blog={blog} />;
}

function OnlineDiyetDetail(props: any, generals: GeneralsTypes) {
  return <OnlineDiyetDetailContent props={props} generals={generals} />;
}

export { BlogDetail, OnlineDiyetDetail, ServiceDetail, CalculateDetail };
