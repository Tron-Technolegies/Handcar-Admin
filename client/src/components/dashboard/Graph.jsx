import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Graph() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["Jan", "Feb", "Mar", "Apr"] }]}
      series={[{ data: [500, 400, 600, 700], color: "#DB1215" }]}
      width={500}
      height={300}
    />
  );
}
