import React from "react";

import StockCardComponent from "../StockCardComponent/Stock.component";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
} from "reactstrap";

const TopVolume = ({ data }) => {
  return data.length === 0 || data === null ? (
    <div>Loading...</div>
  ) : (
    <Row>
      {data.map((stock, index) => {
        return <StockCardComponent stockData={stock} key={index} />;
      })}
    </Row>
  );
};

export default TopVolume;
