import React from 'react';

import { Container, ScrollView, View, Button } from './styles'

import { guesses } from '~/data'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import GuessNavigator from '~/components/GuessNavigator'
import GuessMatch from '~/components/GuessMatch'

export default class Guesses extends React.Component {

  constructor(props) {
    
    super(props);

    this.state = {
      guesses
    }

  }
  
  render() {
    return (
      <Container>

        <Header navigation={this.props.navigation} />
        
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        
        <GuessNavigator guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} nav="Guesses" />
        
        <ScrollView>
          <View>
            {this.state.guesses.map((item, key) => 
              <GuessMatch data={item} editable={true} key={key} />
            )}
            <Button title="Salvar" color="#666"></Button>
          </View>
        </ScrollView>

      </Container>
    );
  }
}
