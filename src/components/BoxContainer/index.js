import React from 'react';

import { BoxScrollView, BoxView, BoxTitle } from './styles'

import BoxContainerItem from '~/components/BoxContainerItem'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BoxView>
        <BoxTitle>{this.props.title}</BoxTitle>
        <BoxScrollView>
          {this.props.data.map((item, key) => 
            <BoxContainerItem num={item.number} key={key} />
          )}
        </BoxScrollView>
      </BoxView>
    );
  }
}

