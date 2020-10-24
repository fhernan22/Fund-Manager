import React, { useEffect, useState } from "react";

import AreaChart from "../Charts/AreaChart";
import TopVolume from "../TopVolumeComponent/TopVolume.component";

const MarketToday = ({ indexName }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/${indexName}/chart/dynamic?token=${process.env.REACT_APP_IEX_PUBLISHABLE_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setHistoricalData(data))
      .catch((err) => console.log(err));
  }, [indexName]);

  return historicalData.length === 0 || historicalData === null ? (
    <div>Loading...</div>
  ) : (
    <AreaChart data={historicalData.data} range={historicalData.range} />
  );
};

export default MarketToday;
