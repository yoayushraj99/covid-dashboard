import React from "react";
import { SummaryDataGrid } from "../components/card-list/summary-dataGrid.component";
import StackedAreaChart from "../components/Graph/StackedAreaChart";
import { Container } from "@material-ui/core";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <SummaryDataGrid />
      <StackedAreaChart />
    </Container>
  );
};

export default HomePage;
