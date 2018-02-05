import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import styled from 'styled-components';
import playerHandbook from 'assets/ph.pdf';

const Container = styled.div`
  height: 100%;
`;

const Frame = styled.div`
  height: 95%;
  width: 75%;
  overflow-y: scroll;
  margin: 0 auto;
  border: 1px solid black;
`;

const PageNumber = styled.p`
  padding-top: 0.5em;
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

export default class GameMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1
    };

    this.onDocumentLoad = this.onDocumentLoad.bind(this);
  }

  onDocumentLoad({ numPages, ...rest }) {
    console.log('testing: ', numPages, rest);
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Container>
        <Frame>
          <Document file={playerHandbook} onLoadSuccess={this.onDocumentLoad}>
            <Page scale={1.5} pageNumber={pageNumber} />
          </Document>
        </Frame>
        <PageNumber>
          {pageNumber} / {numPages}
        </PageNumber>
      </Container>
    );
  }
}
