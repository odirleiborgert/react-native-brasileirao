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
            <BoxContainerItem number={item.number} key={key} navigation={this.props.navigation} />
          )}
        </BoxScrollView>
        
      </BoxView>
    );
  }
}

