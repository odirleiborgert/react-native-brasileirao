import React from 'react';

import { Container, GuessContainer, GuessTime, GuessTimeLeftName, GuessNumber, GuessNumberText, GuessX, GuessXText, Name, ScrollView } from './styles'

import { othersGuesses } from '~/data'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Others extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      othersGuesses
    }
  }
  
  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        <NavGuess guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} />
        <ScrollView>
          {this.state.othersGuesses.map((item) =>
            <> 
              <Name>{item.name}</Name>
              {item.guesses.map((i, k) =>
                <GuessContainer key={k}>
                  <GuessTime>
                    <GuessTimeLeftName>{i.name_1}</GuessTimeLeftName>
                  </GuessTime>
                  <GuessNumber>
                    <GuessNumberText>{i.score_1}</GuessNumberText>
                  </GuessNumber>
                  <GuessX>
                    <GuessXText>x</GuessXText>
                  </GuessX>
                  <GuessNumber>
                    <GuessNumberText>{i.score_2}</GuessNumberText>
                  </GuessNumber>
                  <GuessTime>
                    <GuessTimeLeftName>{i.name_2}</GuessTimeLeftName>
                  </GuessTime>
                </GuessContainer>
              )}
            </> 
          )}
        </ScrollView>
      </Container>
    );
  }
}
