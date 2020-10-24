import React, { useEffect, useState } from "react";
import MarketToday from "../../components/MarketTodayComponent/MarketToday.component";
import MarketSummary from "../../components/MarketSummaryComponent/MarketSummary.component";

import "./Markets.styles.scss";

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

const Markets = () => {
  const [activeIndex, setActiveIndex] = useState("SPY");
  // useEffect(() => {
  //   fetch(
  //     `https://sandbox.iexapis.com/stable/stock/dia/quote?token=${process.env.REACT_APP_IEX_PUBLISHABLE_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    // <MarketToday indexName="hello" />
    <>
      <Row>
        <Col xs="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h2">Markets Today</CardTitle>
                </Col>
                <Col sm="6">
                  <ButtonGroup
                    className="btn-group-toggle float-right"
                    data-toggle="buttons"
                  >
                    <Button
                      color="info"
                      id="0"
                      size="sm"
                      tag="label"
                      className={`btn-simple ${
                        activeIndex === "SPY" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveIndex("SPY");
                      }}
                    >
                      <input defaultChecked name="options" type="radio" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        S&P 500
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                    <Button
                      color="info"
                      id="1"
                      size="sm"
                      tag="label"
                      className={`btn-simple ${
                        activeIndex === "DIA" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveIndex("DIA");
                      }}
                    >
                      <input name="options" type="radio" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Dow Jones
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-gift-2" />
                      </span>
                    </Button>
                    <Button
                      color="info"
                      id="2"
                      size="sm"
                      tag="label"
                      className={`btn-simple ${
                        activeIndex === "QQQ" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveIndex("QQQ");
                      }}
                    >
                      <input name="options" type="radio" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Nasdaq
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-tap-02" />
                      </span>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <MarketToday indexName={activeIndex.toLowerCase()} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <MarketSummary />
    </>
    // <Row>
    //   <Col lg="2" md="4">
    //     <Card className="card-stats">
    //       <CardBody>
    //         <Row>
    //           <Col xs="7">
    //             <div className="numbers">
    //               <p className="card-category textCenter">AAPL</p>
    //               <CardTitle tag="h4" className="bullish">
    //                 +5.32%
    //               </CardTitle>
    //             </div>
    //           </Col>
    //           <Col xs="5">
    //             <div
    //               className="info-icon icon-warning"
    //               style={{ background: "none" }}
    //             >
    //               <i className="tim-icons icon-minimal-up bullish" />
    //             </div>
    //           </Col>
    //         </Row>
    //       </CardBody>
    //     </Card>
    //   </Col>
    // </Row>
  );
};

export default Markets;
