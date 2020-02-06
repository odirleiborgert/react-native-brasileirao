import React from 'react';

import { Text, View } from './styles'

export default class NavGuess extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Meus Palpites</Text>
        <Text>Outros Palpites</Text>
        <Text>Resultados</Text>
        <Text>Ranking</Text>
      </View>
    );
  }
}

