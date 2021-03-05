import React from "react";

export const Card = (props) => {
  return (
      <tbody>
        <tr>
          <td>{props.country}</td>
          <td>{props.TotalCases}</td>
          <td>{props.TotalDeaths}</td>
          <td>{props.TotalRecovered}</td>
        </tr>
      </tbody>
  );
};
