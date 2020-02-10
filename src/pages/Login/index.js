import React from 'react';

import { Container, View, Title, TextInput, Button } from './styles'

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View>
          <Title>Bolão do Brasileirão 2020</Title>
          <TextInput maxLength={40} value="Usuário" />
          <TextInput maxLength={40} value="Senha" />
          <Button title="Entrar" color="#666" onPress={() => this.props.navigation.navigate('Dashboard')} />
        </View>
      </Container>
    );
  }
}

