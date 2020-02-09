import React from 'react';

import { TouchableOpacity } from 'react-native'

import { Text, Item, ScrollView } from './styles'

export default class NavGuess extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Guesses', {
          id: this.props.guess
        })}>
          <Item>
            <Text>Meus Palpites</Text>
          </Item>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Others', {
          id: this.props.guess
        })}>
          <Item>
            <Text>Outros Palpites</Text>
          </Item>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Results', {
          id: this.props.guess
        })}>
          <Item>
            <Text>Resultados</Text>
          </Item>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Ranking', {
          id: this.props.guess
        })}>
          <Item>
            <Text>Ranking</Text>
          </Item>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

