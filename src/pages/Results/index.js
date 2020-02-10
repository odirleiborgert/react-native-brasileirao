import React from 'react';

import { Container, ScrollView } from './styles'

import { results } from '~/data'

import Header from '~/components/Header'
import GuessTitle from '~/components/GuessTitle'
import GuessNavigator from '~/components/GuessNavigator'
import GuessMatch from '~/components/GuessMatch'

export default class Results extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      results
    }
    
  }

  render() {
    return (
      <Container>

        <Header navigation={this.props.navigation} />
        
        <GuessTitle guess={this.props.navigation.getParam('id', 0) } />
        
        <GuessNavigator guess={this.props.navigation.getParam('id', 0) } navigation={this.props.navigation} nav="Results" />
        
        <ScrollView>
          {this.state.results.map((item, key) => 
            <GuessMatch data={item} key={key} />
          )}
        </ScrollView>
        
      </Container>
    );
  }
}

