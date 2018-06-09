import React from 'react';
import './JokeDisplay.css'
import { Container, Card, Button, Icon, Loader } from 'semantic-ui-react';

export default class JokeDisplay extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      jokes: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.getRandomJokes();
  }

  updateJokes = (jokes) => {
    this.setState({
      jokes: jokes,
      loading: false,
    });
  }

  getRandomJokes = () => {
    this.setState({
      loading: true, 
    });
    const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten";
    fetch(url, {
      headers:{
        Accept: "application/json",
      }
    }).then((response) => response.json())
      .then(this.updateJokes);
  }

  generateJokes = () => {
    const items = this.state.jokes.map((joke, i) => {
      const item = {
        header: `Joke ID #${joke.id}`,
        description: `${joke.setup}\n${joke.punchline}`,
        meta: joke.type,
      }

      return item;
    });
    return items;
  }

  render() {
    return (
      <Container>
        <Button 
          primary 
          circular 
          onClick={this.getRandomJokes} 
          className="ranBtn"
        >
          <Icon name="random"/>Randomize
        </Button>
        <br/>
        <Loader size='medium' inline active={this.state.loading}>Loading</Loader>
        <Card.Group 
          items={this.generateJokes()} 
          centered
          className={this.state.loading? "jokesHidden" : ""}
        />
      </Container>
    );
  }
}
