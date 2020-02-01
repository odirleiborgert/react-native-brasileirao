import React from 'react';

import { View, Text, Button } from 'react-native';

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header />
        <NavGuess />
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        <Text>Results</Text>
        <Button title="Dashboard" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
        <Button title="Salvar"></Button>
      </View>
    );
  }
}

