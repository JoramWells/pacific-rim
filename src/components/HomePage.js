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
        <header >
          <Row justify="space-around" align="middle">
            <Col>
              <h1>AI-powered suite that</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
              <Button size="large">Get Started</Button>
            </Col>
            <Col>
              <img
                style={{
                  width: "500px",
                  height: "500px",
                  objectFit: "contain",
                }}
                alt="wtf"
                src="https://www.accountingweb.com/sites/default/files/styles/inline_banner/public/boardmeeting.jpg?itok=7ej1QJps"
              />
            </Col>
          </Row>
        </header>
        <main style={{textAlign:"center"}}>
            <h1>Our Services</h1>
          <Row justify="space-around" align="middle">
            <Col>
              <Card
                style={{
                  border: "1px solid #22d1ee",
                  backgroundColor: "#002651",
                }}
              >
                I am!
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  border: "1px solid #22d1ee",
                  backgroundColor: "#002651",
                }}
              >
                I am!
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  border: "1px solid #22d1ee",
                  backgroundColor: "#002651",
                }}
              >
                I am!
              </Card>
            </Col>
          </Row>
          <Row justify="center" style={{ margin: "1rem" }}>
            <Card
              style={{
                width: "25rem",
                opacity: "0.1",
                border: "1px solid #22d1ee",
              }}
            >
              say something
            </Card>
          </Row>
          <h2>Our Clients</h2>
        </main>
      </div>
    );
  }
}
