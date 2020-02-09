import React from 'react';

import { Container, View, ScrollView, Title, Text, UserContainer, UserBoxName, UserName, UserBoxPointer, UserPointer } from './styles'

import { rankingGeneral } from '~/data/ranking'

import Header from '~/components/Header'
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
      },
      rankingGeneral
    }
  }

  render() {
    return (
      <Container>

        <Header navigation={this.props.navigation} />

        <BoxContainer title="Próximas rodadas" data={this.state.guesses.news} navigation={this.props.navigation} />
        
        <View>
          <Title>Ranking geral</Title>
          <ScrollView>
            {this.state.rankingGeneral.map((item, key) => 
              <UserContainer key={key}>
                <UserBoxName>
                  <UserName>{item.name}</UserName>
                </UserBoxName>
                <UserBoxPointer>
                  <UserPointer>{item.score} pts</UserPointer>
                </UserBoxPointer>
              </UserContainer>
            )}
          </ScrollView>
        </View>

        <BoxContainer title="Rodadas realizadas" data={this.state.guesses.olds} navigation={this.props.navigation} />

      </Container>
    );
  }
}

