import { Component } from 'react';
import Container from "./Container/Container";
import {Statistics} from './Statistics/Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  render() {
    const { good, neutral, bad } = this.state;
    

    return (
      <Container>
        <h1>Please leave feedback</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Container>
    );
  }
}





/*export const App = () => {
  return (

    
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Hello world
      </div>
  );
};*/
