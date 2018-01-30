import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import characterImage from 'assets/char';

const Image = styled.img`
  border-bottom-right-radius: 50px;
  -moz-border-bottom-right-radius: 50px;
  height: 100%;
`;

const Uploader = styled.input`
  display: none;
`;

export default class CharacterPicture extends Component {
  constructor(props) {
    super(props);

    this.handleOnDrag = this.handleOnDrag.bind(this);
  }

  /* TODO CROP IMAGES SO THEY DONT DISTORT */

  handleOnDrag() {
    console.log('Drags onDrags');
  }

  render() {
    return (
      <Fragment>
        <label htmlFor="uploader">
          <Image
            src={characterImage}
            alt="characterPicture"
            onDrop={this.handleOnDrag}
            width={107}
          />
        </label>
        <Uploader id="uploader" type="file" />
      </Fragment>
    );
  }
}
