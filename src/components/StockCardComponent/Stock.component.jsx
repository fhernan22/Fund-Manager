import React from "react";

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

const StockCard = ({ stockData }) => {
  console.log(stockData);
  return (
    <Col lg="3" md="6">
      <Card className="card-stats">
        <CardBody>
          <Row>
            <Col xs="5">
              <div className="numbers" style={{ textAlign: "left" }}>
                <p className="card-category">{stockData.symbol}</p>
                <CardTitle tag="h4">{stockData.companyName}</CardTitle>
              </div>
            </Col>
            <Col xs="7" style={{ textAlign: "center" }}>
              <p
                className={stockData.changePercent >= 0 ? "bullish" : "bearish"}
                style={{ display: "inline-block" }}
              >
                {`${stockData.changePercent.toPrecision(3)}%`}
              </p>
              <div
                className="info-icon icon-warning"
                style={{ background: "none", display: "inline-block" }}
              >
                {stockData.changePercent >= 0 ? (
                  <i className="tim-icons icon-minimal-up bullish" />
                ) : (
                  <i className="tim-icons icon-minimal-down bearish" />
                )}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockCard;
