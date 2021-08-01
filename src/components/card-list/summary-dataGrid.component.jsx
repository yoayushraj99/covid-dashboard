import React from "react";
import useFetch from "../../useFetch";
import { CircularProgress } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

export const SummaryDataGrid = () => {
  const { data, error } = useFetch(
    "https://corona.lmao.ninja/v3/covid-19/countries"
  );
  if (data) {
    const formatedData = data.map((country, index) => {
      return {
        id: index + 1,
        flag: country.countryInfo.flag,
        country: country.country,
        todayCases: country.todayCases
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        todayDeaths: country.todayDeaths
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        todayRecovered: country.todayRecovered
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        cases: country.cases
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        deaths: country.deaths
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        recovered: country.recovered
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        population: country.population
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
      };
    });
    console.log(formatedData);
    const rows = formatedData;
    const columns = [
      { field: "id", headerName: "#", width: 90 },
      { field: "country", headerName: "Country", width: 180 },
      { field: "cases", headerName: "Total Cases", width: 160 },
      { field: "todayCases", headerName: "New Cases", width: 160 },
      { field: "deaths", headerName: "Total Deaths", width: 160 },
      { field: "todayDeaths", headerName: "New Deaths", width: 160 },
      { field: "recovered", headerName: "Total Recovered", width: 160 },
      { field: "todayRecovered", headerName: "New Recovered", width: 160 },
      { field: "population", headerName: "Population", width: 160 },
    ];

    return (
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    );
  } else {
    console.log(error);
    return <CircularProgress />;
  }
};
