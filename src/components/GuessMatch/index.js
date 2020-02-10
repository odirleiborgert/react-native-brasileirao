import React from 'react';

import { Container, Time, TimeLeftName, Number, NumberText, Divider, DividerText } from './styles'

export default class GuessMatch extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>

            <Time>
                <TimeLeftName>{this.props.data.name_1}</TimeLeftName>
            </Time>
            <Number>
                <NumberText>{this.props.data.score_1}</NumberText>
            </Number>

            <Divider>
                <DividerText>x</DividerText>
            </Divider>

            <Number>
                <NumberText>{this.props.data.score_2}</NumberText>
            </Number>
            <Time>
                <TimeLeftName>{this.props.data.name_2}</TimeLeftName>
            </Time>

        </Container>
    );
  }
}

