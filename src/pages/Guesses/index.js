import React from 'react';

import { Button } from 'react-native';
import { Container, View, ScrollView, Text } from './styles'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import NavGuess from '~/components/NavGuess'

export default class Guesses extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container>
        <Header />
        <NavGuess />
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        <ScrollView>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos oasdfasds meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus paasdflpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todoasdfs os madseus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os asdfmeus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todosadsf os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus adsfpalpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos oasdfasds meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus paasdflpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todoasdfs os madseus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os asdfmeus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todosadsf os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus adsfpalpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus adf pra essa rodada</Text>
          <Text>Aquiv ai todos adsfos meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus pfaalpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos osasdf masdeus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
          <Text>Aquiv ai todos os meus palpites pra essa rodada</Text>
        </ScrollView>
        <Button title="Salvar" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>        
      </Container>
    );
  }
}
