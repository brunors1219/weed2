import React, { Component } from "react";
import dynamic from "next/dynamic";
import { Center } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Screen = styled(Center)`
  color:blue;
`;

const QrReader = dynamic(
  () => import("react-qr-reader").then((mod) => mod.QrReader),
  { ssr: false }
);
class Index extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <Screen>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "10%" }}
        />
        <p>{this.state.result}</p>
      </Screen>
    );
  }
}
export default Index;