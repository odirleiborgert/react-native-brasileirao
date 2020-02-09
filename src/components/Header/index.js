import React from 'react';

import { Button, Text } from 'react-native'

import { Container, ViewLeft, ViewRight } from './styles'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container>
        <ViewLeft>
          <Button title="Home" color="#666" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
        </ViewLeft>
        <ViewRight>
          <Text>Odirlei</Text>
        </ViewRight>
      </Container>
    );
  }
}

