import React from 'react';

import { Container, GuessContainer, GuessTime, GuessTimeLeftName, GuessNumber, GuessNumberText, GuessX, GuessXText, ScrollView } from './styles'

import { results } from '~/data'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results
    }
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        <NavGuess guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} nav="Results" />
        <ScrollView>
          {this.state.results.map((item, key) => 
            <GuessContainer key={key}>
              <GuessTime>
                <GuessTimeLeftName>{item.name_1}</GuessTimeLeftName>
              </GuessTime>
              <GuessNumber>
                <GuessNumberText>{item.score_1}</GuessNumberText>
              </GuessNumber>
              <GuessX>
                <GuessXText>x</GuessXText>
              </GuessX>
              <GuessNumber>
                <GuessNumberText>{item.score_2}</GuessNumberText>
              </GuessNumber>
              <GuessTime>
                <GuessTimeLeftName>{item.name_2}</GuessTimeLeftName>
              </GuessTime>
            </GuessContainer>
          )}
        </ScrollView>
      </Container>
    );
  }
}

