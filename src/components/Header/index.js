import React from 'react';

import { Container } from './styles'

import { TopNavigation } from '@ui-kitten/components';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container>
        <TopNavigation title='Home' alignment='center' />
      </Container>
    );
  }
}

