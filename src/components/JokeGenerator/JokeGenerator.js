import React from 'react';
import Title from '../Title/Title';
import JokeDisplay from '../JokeDisplay/JokeDisplay';
import { Container } from 'semantic-ui-react';

export default class JokeGenerator extends React.Component {
  render() {
    return (
      <Container fluid>
        <Title/>
        <JokeDisplay/>
      </Container>
    );
  }
}
