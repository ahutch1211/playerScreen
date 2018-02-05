import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Dropdown from 'components/header/menu/dropdown';
import { Settings as SettingsIcon } from 'common/icons';

const Button = styled.div`
  width: 2em;
  height: 2em;
  padding: 1.5em;
  cursor: pointer;
  margin-left: auto;
  border-width: ${props => (props.active ? '0px 1px' : '0px')};
  background-color: ${props => (props.active ? '#373737' : 'auto')};

  &:hover {
    border-width: ${props => (props.active ? '0px 1px' : '0px')};
    border-color: ${props => (props.active ? 'black' : 'lightgrey')};
    background-color: ${props => (props.active ? '#373737' : '#dfdce3')};
  }
`;

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Fragment>
        <Button active={this.state.open} onClick={this.handleOnClick}>
          <SettingsIcon />
        </Button>
        {this.state.open && <Dropdown onClick={this.handleOnClick} />}
      </Fragment>
    );
  }
}
