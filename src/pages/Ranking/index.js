import React from 'react';

import { View, Button } from 'react-native';

import { Container, ScrollView, UserContainer, UserBoxName, UserName, UserBoxPointer, UserPointer } from './styles'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Ranking extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>

        <Header />

        <NavGuess />

        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />

        <ScrollView>

          <UserContainer>
            <UserBoxName>
              <UserName>Odirlei</UserName>
            </UserBoxName>
            <UserBoxPointer>
              <UserPointer>4545 pts</UserPointer>
            </UserBoxPointer>
          </UserContainer>

          <UserContainer>
            <UserBoxName>
              <UserName>Odirlei</UserName>
            </UserBoxName>
            <UserBoxPointer>
              <UserPointer>1520 pts</UserPointer>
            </UserBoxPointer>
          </UserContainer>

          <UserContainer>
            <UserBoxName>
              <UserName>Odirlei</UserName>
            </UserBoxName>
            <UserBoxPointer>
              <UserPointer>980 pts</UserPointer>
            </UserBoxPointer>
          </UserContainer>

          <UserContainer>
            <UserBoxName>
              <UserName>Odirlei</UserName>
            </UserBoxName>
            <UserBoxPointer>
              <UserPointer>800 pts</UserPointer>
            </UserBoxPointer>
          </UserContainer>

          <UserContainer>
            <UserBoxName>
              <UserName>Odirlei</UserName>
            </UserBoxName>
            <UserBoxPointer>
              <UserPointer>153 pts</UserPointer>
            </UserBoxPointer>
          </UserContainer>

        </ScrollView>

        <Button title="Ranking Geral" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>

      </Container>
    );
  }
}
