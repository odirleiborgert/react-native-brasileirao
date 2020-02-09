import React from 'react';

import { Text, Button } from 'react-native';

import { Container, ScrollView, UserContainer, UserBoxName, UserName, UserBoxPointer, UserPointer } from './styles'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Ranking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ranking: [
        { name: 'Odirlei', score: 123 },
        { name: 'Karlla', score: 123 },
        { name: 'Thiago', score: 123 },
        { name: 'Odirlei', score: 123 },
        { name: 'Karlla', score: 123 },
        { name: 'Thiago', score: 123 },
        { name: 'Odirlei', score: 123 },
        { name: 'Karlla', score: 123 },
        { name: 'Thiago', score: 123 },
      ]
    }
  }

  render() {
    return (
      <Container>

        <Header navigation={this.props.navigation} />

        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />

        <NavGuess guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} />

        <ScrollView>

          <Text>Ranking</Text>

          {this.state.ranking.map((item, key) => 
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

        

      </Container>
    );
  }
}
