import React from 'react';

import { ScrollView } from 'react-native'

import { Layout, Text, StyleService } from '@ui-kitten/components'

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
      <Layout style={styles.container}>

        <Header navigation={this.props.navigation} />

        <BoxContainer title="Próximas rodadas" data={this.state.rounds.open} navigation={this.props.navigation} />
        
        <Layout style={styles.ranking}>

          <Text style={styles.title} category='h5'>Ranking geral</Text>

          <ScrollView style={styles.scrollview}>
            {this.state.rankingGeneral.map((item, key) => 
              <RankingItem data={item} key={key} />
            )}
          </ScrollView>
          
        </Layout>

        <BoxContainer title="Rodadas realizadas" data={this.state.rounds.closed} navigation={this.props.navigation} />

      </Layout>
    );
  }
}



const styles = StyleService.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#03b7d8',
    marginLeft: 20,
  },
  ranking: {
    margin: 'auto',
    flex: 1,
  },
  scrollview: {
    marginLeft: 20,
    marginRight: 20,
  }
})

