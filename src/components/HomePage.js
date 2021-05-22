import React, { Component } from "react";
import {Row,Col,Card} from 'antd'

export default class HomePage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#002651",
          height: "100vh",
          textAlign: "center",
          margin: "0",
        }}
      >
        <header style={{ padding: "3rem" }}>
          <h1 style={{ color: "white", margin: "0" }}>Pacific</h1>
        </header>
        <main>
          <Row>
            <Col>
              <Card>I am!</Card>
            </Col>
          </Row>
        </main>
      </div>
    );
  }
}
