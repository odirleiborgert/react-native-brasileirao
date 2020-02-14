import React from 'react';

import { StyleSheet } from 'react-native'

import { ScrollView } from './styles'

import { Layout, Text } from '@ui-kitten/components'

import BoxContainerItem from '~/components/BoxContainerItem'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={styles.container}>

        <Text style={styles.title} category='h5'>{this.props.title}</Text>

        <ScrollView>
          {this.props.data.map((item, key) => 
            <BoxContainerItem number={item.number} key={key} navigation={this.props.navigation} />
          )}
        </ScrollView>
        
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#03b7d8',
  },
})