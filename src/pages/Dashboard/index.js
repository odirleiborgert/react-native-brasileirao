import React from 'react';

import { Container, View, Text } from './styles'

import BoxContainer from '~/components/BoxContainer'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guesses: {
        news: [
          { number: 6, title: 'xyz' },
          { number: 7, title: 'xyz' },
          { number: 8, title: 'xyz' },
          { number: 9, title: 'xyz' },
          { number: 10, title: 'xyz' },
          { number: 11, title: 'xyz' },
        ],
        olds: [
          { number: 5, title: 'xyz' },
          { number: 4, title: 'xyz' },
          { number: 3, title: 'xyz' },
          { number: 2, title: 'xyz' },
          { number: 1, title: 'xyz' },
        ]
      }
    }
  }

  render() {
    return (
      <Container>

        <BoxContainer title="Próximas rodadas" data={this.state.guesses.news} />
        
        <View>
          <Text>Ranking geral</Text>
        </View>

        <BoxContainer title="Rodadas realizadas" data={this.state.guesses.olds} />

      </Container>
    );
  }
}

