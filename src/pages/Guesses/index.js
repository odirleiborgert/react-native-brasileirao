import React from 'react';

import { View, Text, Button } from 'react-native';

export default class Guesses extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View>
        <Text>Guesses</Text>
        <Button title="Dashboard" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
        <Button title="Guesses" onPress={() => this.props.navigation.navigate('Guesses')}></Button>
        <Button title="Login" onPress={() => this.props.navigation.navigate('Login')}></Button>
        <Button title="Ranking" onPress={() => this.props.navigation.navigate('Ranking')}></Button>
        <Button title="Results" onPress={() => this.props.navigation.navigate('Results')}></Button>
      </View>
    );
  }
}
