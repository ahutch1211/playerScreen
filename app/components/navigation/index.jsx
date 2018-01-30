import React, { Component } from 'react';
import styled from 'styled-components';
import { ACTIVE_SHADOW, SHADOW, TABS } from 'common/constants';

const Tab = styled.div`
  width: 1em;
  height: 2em;
  background-color: white;
  margin: 1em 0;
  border: 1px solid black;
  border-radius: 0 9px 9px 0;
  box-shadow: ${props => (props.active ? ACTIVE_SHADOW : SHADOW)};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: ${ACTIVE_SHADOW};
  }
`;

const Navigation = styled.div`
  align-self: flex-start;
  margin-top: 10em;
`;

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.onMapClick = () => props.onTabChange(TABS.MAP);
    this.onCharacterClick = () => props.onTabChange(TABS.CHARACTER);
    this.onSkillsClick = () => props.onTabChange(TABS.SKILLS);
    this.onInventoryClick = () => props.onTabChange(TABS.INVENTORY);
    this.onGMClick = () => props.onTabChange(TABS.GAME_MASTER);
  }

  render() {
    const { tab } = this.props;

    return (
      <Navigation>
        <Tab active={tab === TABS.MAP} onClick={this.onMapClick} />
        <Tab active={tab === TABS.CHARACTER} onClick={this.onCharacterClick} />
        <Tab active={tab === TABS.SKILLS} onClick={this.onSkillsClick} />
        <Tab active={tab === TABS.INVENTORY} onClick={this.onInventoryClick} />
        <Tab active={tab === TABS.GAME_MASTER} onClick={this.onGMClick} />
      </Navigation>
    );
  }
}
