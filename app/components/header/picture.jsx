import React, { Component, Fragment } from 'react';
import debounce from 'debounce';
import styled from 'styled-components';
import src from 'assets/char';

const Image = styled.img`
  border-bottom-right-radius: 50px;
  -moz-border-bottom-right-radius: 50px;
  height: 100%;
`;

const Uploader = styled.input`
  display: none;
`;

export default class Picture extends Component {
  constructor(props) {
    super(props);

    this.handleOnDrag = debounce(this.handleOnDrag.bind(this), 200);
  }

  /* TODO CROP IMAGES SO THEY DONT DISTORT */

  handleOnDrag(event) {
    console.log('Drags onDrags', event, event.target);
  }

  render() {
    return (
      <Fragment>
        <label htmlFor="uploader">
          <Image
            src={src}
            alt="characterPicture"
            onDrop={this.handleOnDrag}
            onDragOver={this.handleOnDrag}
            width={107}
          />
        </label>
        <Uploader id="uploader" type="file" />
      </Fragment>
    );
  }
}
