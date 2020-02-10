import React from 'react';

import { Container, BoxName, Name, BoxPointer, Pointer } from './styles'

export default class RankingItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
            <BoxName>
                <Name>{this.props.data.name}</Name>
            </BoxName>
            <BoxPointer>
                <Pointer>{this.props.data.score} pts</Pointer>
            </BoxPointer>
        </Container>
    );
  }
}
