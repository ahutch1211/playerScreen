import React, { Component } from 'react';
import styled from 'styled-components';
import execute from 'common/execute';

const Label = styled.div`
  color: #f2f2f2;
`;

const Container = styled.div`
  width: 20em;
  height: 25em;
  background-color: #373737;
  border: 1px solid black;
  box-shadow: 5px 5px 7px black;

  /* input[type='checkbox'] {
    visibility: hidden;
  } */
`;

const Toggle = styled.input`
  &::before {
    content: 'On';
    position: absolute;
    top: 12px;
    left: 13px;
    height: 2px;
    color: #26ca28;
    font-size: 16px;
  }

  width: 120px;
  height: 40px;
  background: #333;
  margin: 20px 60px;
  border-radius: 50px;
  position: relative;

  &::after {
    content: 'Off';
    position: absolute;
    top: 12px;
    left: 84px;
    height: 2px;
    color: #111;
    font-size: 16px;
  }
`;

const Bar = styled.label`
  display: block;
  width: 52px;
  height: 22px;
  border-radius: 50px;

  transition: all 0.5s ease;
  cursor: pointer;

  top: 9px;
  z-index: 1;
  left: 12px;
  background: red;
`;

// -----------------//

const Ball = styled.div`
  border: 1px solid black;
  border-radius: 45;
  height: 1.5em;
  width: 2em;
  background-color: white;
  z-index: 1;
`;

const Option = styled.div`
  width: 100%;
  height: 2.5em;
  background-color: grey;
`;

//position: absolute;

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.getRef = node => (this.node = node);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    if (this.node && !this.node.contains(event.target)) {
      execute(this.props.onClick);
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOnClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOnClick);
  }

  render() {
    return (
      <Container innerRef={this.getRef}>
        <Option>
          <Ball />
        </Option>
      </Container>
    );
  }
}
