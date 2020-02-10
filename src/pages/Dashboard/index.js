import React from 'react';

import { Container, View, ScrollView, Title } from './styles'

import { rankingGeneral, rounds } from '~/data'

import Header from '~/components/Header'
import BoxContainer from '~/components/BoxContainer'
import RankingItem from '~/components/RankingItem'

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
              <RankingItem data={item} key={key} />
            )}
          </ScrollView>
          
        </View>

        <BoxContainer title="Rodadas realizadas" data={this.state.rounds.closed} navigation={this.props.navigation} />

      </Container>
    );
  }
}

