import React from 'react';

import { StatusBar } from 'react-native'

import { Container, View, Title } from './styles'

import { Input, Button } from '@ui-kitten/components'

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View>
          <StatusBar backgroundColor="#F2F8FC" barStyle="dark-content" />
          <Title>Bolão do Brasileirão 2020</Title>
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" />
          <Button onPress={() => this.props.navigation.navigate('Dashboard')}>ENTRAR</Button>
        </View>
      </Container>
    );
  }
}

