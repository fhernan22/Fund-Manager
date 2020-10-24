import React, { useEffect, useState } from "react";

import TopVolume from "../TopVolumeComponent/TopVolume.component";

const MarketSummary = () => {
  const [topVolumeData, setTopVolumeData] = useState([]);

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/market/list/mostactive?displayPercent=true&token=${process.env.REACT_APP_IEX_PUBLISHABLE_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setTopVolumeData(data));
  }, []);
  return (
    <div>
      <TopVolume data={topVolumeData.slice(0, 4)} />
    </div>
  );
};

export default MarketSummary;
