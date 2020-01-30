import React from 'react';

import { View, Text, Button, StatusBar, ScrollView } from 'react-native';

import styled from '../../styled.js'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styled.layout.container}>
        
        <StatusBar hidden={true} />

        <View style={styled.dashboard.scroll}>
          <Text style={styled.dashboard.title}>Próximas rodadas</Text>
          <ScrollView>
            <View style={styled.dashboard.box}>
              <Text style={styled.dashboard.box_number}>6°</Text>
              <Text style={styled.dashboard.box_text}>Rodada</Text>
            </View>
            <View style={styled.dashboard.box}>
              <Text style={styled.dashboard.box_number}>7°</Text>
              <Text style={styled.dashboard.box_text}>Rodada</Text>
            </View>
            <View style={styled.dashboard.box}>
              <Text style={styled.dashboard.box_number}>8°</Text>
              <Text style={styled.dashboard.box_text}>Rodada</Text>
            </View>
          </ScrollView>
        </View>
        
        <View>
          <Text style={styled.dashboard.title}>Ranking geral</Text>
        </View>
        
        <View>
          <Text style={styled.dashboard.title}>Rodadas realizadas</Text>
        </View>

        {/* <Button title="Dashboard" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
        <Button title="Guesses" onPress={() => this.props.navigation.navigate('Guesses')}></Button> */}
        <Button title="Login" onPress={() => this.props.navigation.navigate('Login')}></Button>
        {/* <Button title="Ranking" onPress={() => this.props.navigation.navigate('Ranking')}></Button>
        <Button title="Results" onPress={() => this.props.navigation.navigate('Results')}></Button> */}
      </View>
    );
  }
}

