import React from 'react';
import './JokeGenerator.css';
import Title from '../Title/Title';
import JokeDisplay from '../JokeDisplay/JokeDisplay';

export default class JokeGenerator extends React.Component {
  render() {
    return (
      <div>
        <Title/>
        <JokeDisplay/>
      </div>
    );
  }
}
