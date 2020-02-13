import React from 'react';

import { TouchableOpacity } from 'react-native'

import { Layout, Text, TopNavigation, StyleService } from '@ui-kitten/components'

import { Icon } from 'react-native-eva-icons'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  ArrowBackIcon () {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
        <Icon name='arrow-back-outline' fill='#666' width={20} height={20} color="red" style={{ marginLeft: 10, marginRight: 5 }} />
      </TouchableOpacity>
    )
  };

  Username () {
    return (
      <Text style={{ marginRight: 10 }}>Gregory</Text>
    )
  };
   
  render() {
    return (
      <Layout>
        <TopNavigation title='Dashboard' alignment='start' leftControl={this.ArrowBackIcon()} rightControls={this.Username()} />
      </Layout>
    );
  }
}


const styles = StyleService.create({
  container: {
    backgroundColor: '#3366FF'
  },
})
