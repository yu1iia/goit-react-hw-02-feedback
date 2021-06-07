import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
}

render() {

  return (
    <div className="Feedback">
      <h2>Please leave feedback</h2>
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Dad</button>

      <h3>Statistcs</h3>
      <ul>
        <li>Good: </li>
        <li>Neutral: </li>
        <li>Bad: </li>
        <li>Total: </li>
        <li>Positive feedback: </li>
      </ul>
    </div>
  );

}

export default Feedback;
