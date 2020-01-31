import React from 'react';

import { Text } from './styles'

export default class GuessTitle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text>{this.props.guess}° Rodada</Text>
      </>
    );
  }
}

