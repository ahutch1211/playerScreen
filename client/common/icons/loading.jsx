import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

const Icon = styled.div`
  margin-left: 0.5em;
`;
const Label = styled.div``;

const scaling = keyframes`
  0% {
    transform: scaley(1.0);
  }
  50% {
    transform: scaley(0.4);
  }
  100% {
    transform: scaley(1.0);
  }
`;

const AnimatedLine = styled.div`
  display: inline-block;
  animation: 1s ${props => `${props.delay}s`} ${scaling}
    cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite;
  animation-fill-mode: both;
  background-color: black;
  height: 2em;
  width: 4px;
  margin: 2px;
  border-radius: 2px;
  vertical-align: middle;
`;

export default () => (
  <Fragment>
    <Icon>
      <AnimatedLine delay={0.1} />
      <AnimatedLine delay={0.2} />
      <AnimatedLine delay={0.3} />
      <AnimatedLine delay={0.4} />
      <AnimatedLine delay={0.5} />
    </Icon>
    <Label>Loading...</Label>
  </Fragment>
);
