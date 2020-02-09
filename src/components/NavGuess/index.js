import React from 'react';

import { Button } from 'react-native'

import { Item, ScrollView } from './styles'

export default class NavGuess extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navigate: [
        { title: 'Meus Palpites', route: 'Guesses', color: '#999' },
        { title: 'Outros Palpites', route: 'Others', color: '#999' },
        { title: 'Resultados', route: 'Results', color: '#999' },
        { title: 'Ranking', route: 'Ranking', color: '#999' },
      ]
    }
    this.state.navigate = this.state.navigate.map((item) => {
      if (item.route === this.props.nav) {
        item.color = '#666'
      }
      return item
    })
  }

  render() {
    return (
      <ScrollView>

        {this.state.navigate.map((item, key) => 
          <Item key={key}>
            <Button title={item.title} color={item.color} onPress={() => this.props.navigation.navigate(item.route, {
              id: this.props.guess
            })}>
            </Button>
          </Item>
        )}

      </ScrollView>
    );
  }
}

