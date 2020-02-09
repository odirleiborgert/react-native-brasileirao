import React from 'react';

import { Button } from 'react-native';
import { Container, GuessContainer, GuessTime, GuessTimeLeftName, GuessNumber, GuessX, GuessXText, ScrollView } from './styles'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Guesses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guesses: [
        { name_1: 'Corinthians', score_1: 7, name_2: 'Santos', score_2: 1 },
        { name_1: 'São Paulo', score_1: 2, name_2: 'Palmeiras', score_2: 2 },
        { name_1: 'Paisandu', score_1: 4, name_2: 'Palmeiras', score_2: 0 },
        { name_1: 'Vitória', score_1: 2, name_2: 'Bahia', score_2: 2 },
        { name_1: 'Cruzeiro', score_1: 4, name_2: 'Palmeiras', score_2: 0 },
        { name_1: 'São Paulo', score_1: 2, name_2: 'Santos', score_2: 2 },
        { name_1: 'Paisandu', score_1: 4, name_2: 'Palmeiras', score_2: 0 },
        { name_1: 'Vitória', score_1: 2, name_2: 'Bahia', score_2: 2 },
        { name_1: 'Cruzeiro', score_1: 4, name_2: 'Palmeiras', score_2: 0 },
        { name_1: 'Athlético PR', score_1: 2, name_2: 'Santos', score_2: 2 },
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
        </ScrollView>
      </Container>
    );
  }
}
