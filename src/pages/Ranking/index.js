import React from 'react';

import { Container, ScrollView } from './styles'

import { rankingGuess } from '~/data'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import GuessNavigator from '~/components/GuessNavigator'
import RankingItem from '~/components/RankingItem'

export default class Ranking extends React.Component {

  constructor(props) {

    super(props);

    this.state = { 
      ranking: rankingGuess
    }
    
  }

  render() {
    return (
      <Container>

        <Header navigation={this.props.navigation} />

        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />

        <GuessNavigator guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} nav="Ranking" />

        <ScrollView>
          {this.state.ranking.map((item, key) => 
            <RankingItem data={item} key={key} />
          )}
        </ScrollView>

      </Container>
    );
  }
}
