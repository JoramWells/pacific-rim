import React, { Component } from "react";
import { Row, Col, Card, Button } from "antd";

export default class HomePage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#002651",
          height: "100%",
          textAlign: "center",
          margin: "0",
        }}
      >
        <header style={{height:"500px"}}>
          <Row justify="space-around" align="middle">
            <Col>
              <h1 style={{ color: "#ff5959", paddingTop: "5rem" }}>
                PacifiX
              </h1>
              <h2 style={{color:"white"}}>AI-powered suite that</h2>
              <p style={{ fontSize: "1rem", color: "#22d1ee" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been{" "}
              </p>
              <Button size="large" type="primary">
                <b>Get Started</b>
              </Button>
            </Col>
          </Row>
        </header>
        <main style={{ textAlign: "center" }}>
          <div style={{ height: "650x", padding: "2rem" }}>
            <h1 style={{ color: "#ff5959" }}>Our Services</h1>
            <Row justify="center">
              <Col md={12}>
                <p style={{ fontSize: "1rem" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Col>
            </Row>

            <Row justify="space-around" align="middle">
              <Col>
                <Card
                  style={{
                    border: "1px solid #22d1ee",
                    backgroundColor: "#002651",
                    width: "25rem",
                  }}
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    border: "1px solid #22d1ee",
                    backgroundColor: "#002651",
                    width: "25rem",
                  }}
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Card>
              </Col>
            </Row>
            <Row
              justify="space-around"
              align="middle"
              style={{ marginTop: "1rem" }}
            >
              <Col>
                <Card
                  style={{
                    border: "1px solid #22d1ee",
                    backgroundColor: "#002651",
                    width: "25rem",
                  }}
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    border: "1px solid #22d1ee",
                    backgroundColor: "#002651",
                    width: "25rem",
                  }}
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
          <div style={{ height: "500px" }}>
            <h1 style={{ color: "#ff5959" }}>Language Support and Integration</h1>
            <Row justify="center">
              <Col md={12}>
                <p style={{ color: "#000000" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Col>
            </Row>
            <Row justify="space-around" align="middle">
              <Col>
                <img
                  src="https://pbs.twimg.com/profile_images/988505844915556354/lgUSY3mZ.jpg"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                  alt="profile"
                />
              </Col>
              <Col>
                <img
                  src="http://assets.stickpng.com/images/58481791cef1014c0b5e4994.png"
                  alt="assets"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Col>
              <Col>
                <img
                  alt="dtc"
                  src="http://assets.stickpng.com/images/58482ce4cef1014c0b5e4a4c.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Col>
              <Col>
                <img
                  src="https://www.pngkey.com/png/full/215-2152344_tools-ruby-on-rails-logo-png.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                  alt="ruby"
                />
              </Col>
              <Col>
                <img
                  src="https://www.vip-bet.com/wp-content/uploads/2017/02/android-logo-transparent-background.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                  alt="android"
                />
              </Col>
            </Row>
          </div>
          <div style={{ height: "500px" }}>
            <h1 style={{ color: "#ff5959" }}>Our Clients</h1>
            <Row justify="center">
              <Col md={12}>
                <p style={{ color: "#000000" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </Col>
            </Row>
            <Row justify="space-around" align="middle">
              <Col>
                <img
                  src="https://pbs.twimg.com/profile_images/1222765707282255875/X8YKzL31_400x400.jpg"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    borderRadius: "50px",
                  }}
                  alt="zalego"
                />
              </Col>
              <Col>
                <img
                  src="https://www.logolynx.com/images/logolynx/36/367ccd3aa468dc7f73fb61be57bebf30.jpeg"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    borderRadius: "50px",
                  }}
                  alt="zalego"
                />
              </Col>
              <Col>
                <img
                  src="data:image/png;base64,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"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    borderRadius: "50px",
                  }}
                  alt="zalego"
                />
              </Col>
              <Col>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQFBT2Jq7oKESQ/company-logo_200_200/0/1585832405992?e=2159024400&v=beta&t=akTtoTEPl_sofRmVDw0YhHGKoSTYkZ237cJaYKCQFps"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    borderRadius: "50px",
                  }}
                  alt="zalego"
                />
              </Col>
            </Row>
          </div>
        </main>
      </div>
    );
  }
}
