import React from 'react';

import { Container, Name, Row, ScrollView } from './styles'

import { othersGuesses } from '~/data'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import GuessNavigator from '~/components/GuessNavigator'
import GuessMatch from '~/components/GuessMatch'

export default class Others extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      othersGuesses
    }
    
  }
  
  render() {
    return (
      <Container>
        
        <Header navigation={this.props.navigation} />
        
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        
        <GuessNavigator guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} nav="Others" />

        <ScrollView>
          {this.state.othersGuesses.map((item, key) =>
            <Row key={key}>
              <Name>{item.name}</Name>
              {item.guesses.map((i, k) =>
                <GuessMatch data={i} key={k} />
              )}
            </Row> 
          )}
        </ScrollView>
        
      </Container>
    );
  }
}
