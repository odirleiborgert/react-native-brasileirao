import React from 'react';

import { TouchableOpacity } from 'react-native'

import { BoxItem, BoxTitle, BoxSubtitle } from './styles'

export default class BoxContainerItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <BoxItem>
            <BoxTitle>{this.props.number}º</BoxTitle>
            <BoxSubtitle>Rodada</BoxSubtitle>
          </BoxItem>
        </TouchableOpacity>
      </>
    );
  }
}

