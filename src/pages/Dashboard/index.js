import React from 'react';

import { Container, View, ScrollView, Title, Text, UserContainer, UserBoxName, UserName, UserBoxPointer, UserPointer } from './styles'

import { rankingGeneral, rounds } from '~/data'

import Header from '~/components/Header'
import BoxContainer from '~/components/BoxContainer'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rounds,
      rankingGeneral
    }
  }

  render() {
    return (
      <Container>

        <Header navigation={this.props.navigation} />

        <BoxContainer title="Próximas rodadas" data={this.state.rounds.open} navigation={this.props.navigation} />
        
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

        <BoxContainer title="Rodadas realizadas" data={this.state.rounds.closed} navigation={this.props.navigation} />

      </Container>
    );
  }
}

