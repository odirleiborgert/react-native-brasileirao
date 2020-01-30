import React from 'react';

import { View, Image, ImageBackground, Text, TextInput, Button } from 'react-native';

import styled from '../../styled.js'
import { Container } from './styles'

const bg = require('~/assets/img/bg.jpg')
const logo = require('~/assets/img/logo.png')

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container source={bg}
        style={styled.layout.bg}
        resizeMode="cover">
          <Image style={styled.login.logo} source={logo} />
          <View style={styled.form.form}>
            <TextInput style={styled.form.input} maxLength={40} value="Usuário" />
            <TextInput style={styled.form.input} maxLength={40} value="Senha" />
            <Button title="Entrar" color="#7dbf49" onPress={() => this.props.navigation.navigate('Dashboard')} />
          </View>
      </Container>
    );
  }
}

