import React from "react";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="container">
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Total Cases</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">Total Recovered</th>
          </tr>
        </thead>
        {props.countries.map((country) => (
          <Card
            key={country.ID}
            country={country.Country}
            TotalCases={country.TotalConfirmed}
            TotalDeaths={country.TotalDeaths}
            TotalRecovered={country.TotalRecovered}
          />
        ))}
      </table>
    </div>
  );
};
