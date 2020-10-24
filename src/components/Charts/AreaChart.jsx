import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const AreaChart = ({ data, range }) => {
  let labels = [];
  let stockData = [];

  let chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            // suggestedMin: 300,
            // suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          distribution: "linear",
          time: {
            unit: `${range === "1m" || range === "m1" ? "day" : "minute"}`,
            unitStepSize: `${range === "1m" || range === "m1" ? 3 : 30}`,
          },
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
  };

  //   console.log(data);

  let chart = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.2, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0.2)"); //blue colors

      return {
        labels: labels,
        datasets: [
          {
            label: "Price",
            fill: true,
            lineTension: 0.1,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#1f8ef1",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "1f8ef1",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: stockData,
          },
        ],
      };
    },
    options: chartOptions,
  };

  for (let currentData of data) {
    if (currentData.high !== null) {
      if (currentData.minute) {
        labels.push(currentData.date + " " + currentData.minute);
      } else {
        labels.push(currentData.date);
      }
      stockData.push(currentData.high);
    }
  }

  return <Line data={chart.data} options={chart.options} />;
};

export default AreaChart;
