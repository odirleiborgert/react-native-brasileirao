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
        <Icon name='arrow-back-outline' fill='#fff' width={20} height={20} color="red" style={{ marginLeft: 10, marginRight: 5 }} />
      </TouchableOpacity>
    )
  };

  Username () {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={{ marginRight: 10, color: '#fff' }}>Sair</Text>
      </TouchableOpacity>
    )
  };
   
  render() {
    return (
      <Layout>
        <TopNavigation style={styles.topNavigation} titleStyle={styles.title} title='Dashboard' alignment='start' leftControl={this.ArrowBackIcon()} rightControls={this.Username()} />
      </Layout>
    );
  }
}


const styles = StyleService.create({
  topNavigation: {
    backgroundColor: '#03b7d8'
  },
  title: {
    color: '#fff',
  }
})
