import React from "react";

import { Row, Col, Container } from "reactstrap";

import Header from "../../components/HeaderComponent/Header.component";

import "./Home.styles.scss";
import { ReactComponent as HeroImage } from "../../assets/hero-image.svg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Container style={{ maxWidth: "1250px" }}>
        <Row>
          <Col xs="5">
            <h1
              style={{ color: "white", marginTop: "30%", textAlign: "center" }}
            >
              Welcom to Fund Manager!
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              The purpose of this project is to provide users the ability to
              interact with real-time stock market data, make trades, and learn
              about the latest financial news
            </p>
            <p style={{ color: "white", textAlign: "center" }}>
              The current version of the application was quickly put together
              for demonstration purposes for the SHPE National Convention and it
              is not the final product. Please login to look around and see the
              progress we've made.
            </p>
            <p style={{ color: "white", textAlign: "center" }}>Thanks :)</p>
          </Col>
          <Col xs="7">
            <HeroImage style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
