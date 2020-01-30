import React from 'react';

import { View, Image, ImageBackground, StatusBar, Text, TextInput, Button } from 'react-native';

import styled from '../../styled.js'

const bg = require('./../../assets/img/bg.jpg')
const logo = require('./../../assets/img/logo.png')

export default function Login() {

  return (
    <ImageBackground
      source={bg}
      style={styled.layout.bg}
      resizeMode="cover"
    >
      <StatusBar hidden={true} />
      <Image style={styled.login.logo} source={logo} />
      <View style={styled.form.form}>
        {/* <Text style={styled.login.title}>Bolão da Família</Text> */}
        <TextInput style={styled.form.input} maxLength={40} value="Usuário" />
        <TextInput style={styled.form.input} maxLength={40} value="Senha" />
        <Button title="Entrar" color="#7dbf49" onPress={() => this.props.navigation.navigate('Dashboard')} />
      </View>
    </ImageBackground>
  );

}

