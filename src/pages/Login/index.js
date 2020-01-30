import React from 'react';

import { Container, Image, TextInput, Button, View } from './styles'

const bg = require('~/assets/img/bg.jpg')
const logo = require('~/assets/img/logo.png')

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container source={bg} resizeMode="cover">
        <View>
          <Image source={logo} />
          <TextInput maxLength={40} value="Usuário" />
          <TextInput maxLength={40} value="Senha" />
          <Button title="Entrar" color="#7dbf49" onPress={() => this.props.navigation.navigate('Dashboard')} />
        </View>
      </Container>
    );
  }
}

