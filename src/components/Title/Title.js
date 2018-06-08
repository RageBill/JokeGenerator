import React, { Component } from 'react';
import { Segment, Divider, Header } from 'semantic-ui-react';

const titleText = "Joke Generator";

export default class Title extends Component {

  render(){
    return (
      <Segment padded="very" size="massive" inverted color="teal">
        <Divider horizontal inverted>
          <Header size="huge" inverted>{titleText}</Header>
        </Divider>
      </Segment>
    )
  }
}