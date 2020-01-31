import React from 'react';

import { BoxItem, BoxTitle, BoxSubtitle } from './styles'

export default class BoxContainerItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <BoxItem>
          <BoxTitle>{this.props.num}º</BoxTitle>
          <BoxSubtitle>Rodada</BoxSubtitle>
        </BoxItem>
      </>
    );
  }
}

