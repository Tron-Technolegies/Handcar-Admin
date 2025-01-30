import React from "react";
import ServiceCategoryHeader from "../../components/servicecategory/ServiceCategoryHeader";
import ServiceCategoryTable from "../../components/servicecategory/ServiceCategoryTable";

export default function ServiceCategoryPage() {
  return (
    <div>
      <ServiceCategoryHeader />
      <ServiceCategoryTable />
    </div>
  );
}
