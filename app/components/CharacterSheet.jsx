import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

import { SCREEN_HEIGHT, SCREEN_WIDTH, TABS } from 'common/constants';
import Header from 'components/header/index';
import GameMaster from 'components/gamemaster/index';
import Map from 'components/map/index';
import Skills from 'components/skills/index';
import Navigation from 'components/navigation/index';

//const FORM_NAME = 'player';

const Container = styled.div`
  display: table;
  margin: 0 auto;
`;

const Frame = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Screen = styled.div`
  height: ${SCREEN_HEIGHT}px;
  width: ${SCREEN_WIDTH}px;
  margin-top: 6em;
  padding: 0.5em 0.5em 0.5em;
  border: 2px solid black;
  background-color: #f4f4f4;
  box-shadow: 5px 5px 7px black;
  border-radius: 15px;
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const required = value => (value ? undefined : 'Required');

export default class CharacterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { tab: TABS.MAP };

    this.handleOnTabChange = this.handleOnTabChange.bind(this);
  }

  handleOnTabChange(tab) {
    this.setState({
      tab
    });
  }

  render() {
    const { tab } = this.state;

    return (
      <Container>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Header />
              <Frame>
                <Screen>
                  {tab === TABS.MAP && <Map />}
                  {tab === TABS.SKILLS && <Skills />}
                  {tab === TABS.GAME_MASTER && <GameMaster />}
                </Screen>
                <Navigation tab={tab} onTabChange={this.handleOnTabChange} />
              </Frame>
            </form>
          )}
        />
      </Container>
    );
  }
}

//export default reduxForm({ form: FORM_NAME })(CharacterScreen);
