import React, { useEffect, useState } from "react";
import axios from "axios";
import retry from "retry";

import TopVolume from "../TopVolumeComponent/TopVolume.component";
import TopGainersCard from "../TopGainersComponent/TopGainersCard.component";

const operation = retry.operation({
  retries: 10,
  factor: 3,
  minTimeout: 1 * 1000,
  maxTimeout: 60 * 1000,
  randomize: true,
});

const MarketSummary = () => {
  const [mostActive, setMostActive] = useState([]);
  const [topGainers, setTopGainers] = useState([]);

  const [data, setData] = useState({
    mostActive: [],
    topGainers: [],
  });

  const fetchData = () => {
    operation.attempt(async (currentAttempt) => {
      console.log("Attempt number " + currentAttempt);
      try {
        const response = await axios.all([
          axios.get(
            `https://cloud.iexapis.com/stable/stock/market/list/mostactive?displayPercent=true&token=${process.env.REACT_APP_IEX_PUBLISHABLE_KEY}`
          ),
          axios.get(
            `https://cloud.iexapis.com/stable/stock/market/list/gainers?token=${process.env.REACT_APP_IEX_PUBLISHABLE_KEY}`
          ),
        ]);
        setData({ mostActive: response[0].data, topGainers: response[1].data });
        // setMostActive(response[0].data);
        // setTopGainers(response[1].data);
      } catch (e) {
        if (operation.retry) {
          return;
        }
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("hrere");

  return (
    <div>
      <TopVolume data={data.mostActive.slice(0, 4)} />
      <TopGainersCard data={data.topGainers.slice(0, 4)} />
    </div>
  );
};

export default MarketSummary;
