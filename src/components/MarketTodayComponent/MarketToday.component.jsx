import React, { useEffect, useState } from "react";

import axios from "axios";
import retry from "retry";

import AreaChart from "../Charts/AreaChart";

const operation = retry.operation({
  retries: 5,
  factor: 3,
  minTimeout: 1 * 1000,
  maxTimeout: 60 * 1000,
  randomize: true,
});

const MarketToday = ({ indexName }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    operation.attempt((currentAttempt) => {
      axios
        .get(
          `https://sandbox.iexapis.com/stable/stock/${indexName}/chart/dynamic?token=${process.env.REACT_APP_IEX_PUBLISHABLE_KEY}`
        )
        .then((response) => setHistoricalData(response.data))
        .catch((err) => {
          if (operation.retry) {
            console.log("MarketToday Error: " + err);
            return;
          }
        });
    });
  }, [indexName]);

  return historicalData.length === 0 || historicalData === null ? (
    <div>Loading...</div>
  ) : (
    <AreaChart data={historicalData.data} range={historicalData.range} />
  );
};

export default MarketToday;
