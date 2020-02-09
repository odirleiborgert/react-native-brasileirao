import React from 'react';

import { Button } from 'react-native';
import { Container, GuessContainer, GuessTime, GuessTimeLeftName, GuessNumber, GuessX, GuessXText, ContainerScrollView, ScrollView } from './styles'

import { guesses } from '~/data/guesses'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Guesses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guesses
    }
  }
  
  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        <NavGuess guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} />
        <ScrollView>
          <ContainerScrollView>
            {this.state.guesses.map((item, key) => 
              <GuessContainer key={key}>
                <GuessTime>
                  <GuessTimeLeftName>{item.name_1}</GuessTimeLeftName>
                </GuessTime>
                <GuessNumber></GuessNumber>
                <GuessX>
                  <GuessXText>x</GuessXText>
                </GuessX>
                <GuessNumber></GuessNumber>
                <GuessTime>
                  <GuessTimeLeftName>{item.name_2}</GuessTimeLeftName>
                </GuessTime>
              </GuessContainer>
            )}
            <Button title="Dashboard" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
          </ContainerScrollView>
        </ScrollView>
      </Container>
    );
  }
}
