import React, { useState } from "react";

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

import FullWidthAreaChart from "../FullWidthAreaChart/FullWidthAreaChart.component";

const TopGainersCard = ({ data }) => {
  const [activeStock, setActiveStock] = useState("");

  return (
    <Row>
      <Col xs="12">
        <Card className="card-chart">
          <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <CardTitle tag="h2">Top Gainers</CardTitle>
              </Col>
              <Col sm="6">
                <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  {data.map((stock, index) => {
                    return (
                      <Button
                        key={index}
                        color="info"
                        id="0"
                        size="sm"
                        tag="label"
                        className={`btn-simple ${
                          activeStock === stock.symbol ? "active" : ""
                        }`}
                        onClick={() => setActiveStock(stock.symbol)}
                      >
                        <input defaultChecked name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          {stock.symbol}
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <h2>Feature Coming Soon</h2>
              {/* <FullWidthAreaChart stockSymbol={activeStock} /> */}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default TopGainersCard;
