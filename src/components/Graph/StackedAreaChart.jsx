import "./styles.component.css";
import React from "react";
import useFetch from "../../useFetch";
import { CircularProgress } from "@material-ui/core";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

const StackedAreaChart = () => {
  const { data, error } = useFetch(
    "https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=all"
  );
  if (data) {
    const { cases, deaths, recovered } = data;
    const dateSeries = Object.keys(cases);
    const formatedData = [];
    for (let i = 0; i < dateSeries.length; i++) {
      const date = new Date(dateSeries[i]);
      formatedData.push({
        date: date.toDateString().slice(3),
        cases: cases[dateSeries[i]],
        deaths: deaths[dateSeries[i]],
        recovered: recovered[dateSeries[i]],
      });
    }

    return (
      <div
        className="d-flex justify-content-center"
        style={{ width: "100%", height: 360 }}
      >
        <ResponsiveContainer>
          <LineChart
            width={1150}
            height={500}
            data={formatedData}
            margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              name="Total Cases"
              type="monotone"
              dataKey="cases"
              stroke="#f96d00"
            />
            <Line
              name="Total Recovered"
              type="monotone"
              dataKey="recovered"
              stroke="#66DE93"
            />
            <Line
              name="Total Deaths"
              type="monotone"
              dataKey="deaths"
              stroke="#D83A56"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    console.log(error);
    return <CircularProgress />;
  }
};

export default StackedAreaChart;
