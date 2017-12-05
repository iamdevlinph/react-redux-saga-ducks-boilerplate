import React from 'react';

import './counter.css';

import Button from '../../components/Button';

class CounterContainer extends React.Component {
  render() {
    return (
      <div className="counter-container">
        <h1>0</h1>
        <Button />
        <Button />
      </div>
    );
  }
}

export default CounterContainer;
