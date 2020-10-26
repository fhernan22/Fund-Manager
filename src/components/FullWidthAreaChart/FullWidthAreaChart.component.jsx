import React, { useState, useEffect } from "react";

import axios from "axios";

import retry from "retry";

import AreaChart from "../Charts/AreaChart";

const operation = retry.operation({
  retries: 10,
  factor: 3,
  minTimeout: 5 * 1000,
  maxTimeout: 60 * 1000,
  randomize: true,
});

const FullWidthAreaChart = ({ stockSymbol }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/dynamic?token=${process.env.REACT_APP_IEX_PUBLISHABLE_KEY}`
      )
      .then((response) => {
        console.log(response);
        setHistoricalData(response.data);
      });
  }, [stockSymbol]);

  return historicalData.length === 0 || historicalData === null ? (
    <div>Loading...</div>
  ) : (
    <AreaChart data={historicalData.data} range={historicalData.range} />
  );
};

export default FullWidthAreaChart;
