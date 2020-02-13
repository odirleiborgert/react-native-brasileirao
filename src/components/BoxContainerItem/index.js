import React from 'react';

import { TouchableOpacity } from 'react-native'

import { Card, Text, StyleService } from '@ui-kitten/components'

export default class BoxContainerItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Guesses', {
          id: this.props.number
        })}>
          <Text style={styles.title} category='h3'>{this.props.number}º</Text>
          <Text style={styles.subtitle}>Rodada</Text>
        </TouchableOpacity>
      </Card>
    );
  }
}


const styles = StyleService.create({
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#777'
  }
})
