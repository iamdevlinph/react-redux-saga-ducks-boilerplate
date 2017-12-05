import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './counter.css';

import Button from '../../components/Button';

import { actions as counterActions } from '../../ducks/counter';

class CounterContainer extends React.Component {
  render() {
    return (
      <div className="counter-container">
        <h1>{this.props.total}</h1>
        <Button label="Increase" onClick={this.props.counterIncrease} />
        <Button label="Decrease" onClick={this.props.counterDecrease} />
      </div>
    );
  }
}

CounterContainer.propTypes = {
  total: PropTypes.number.isRequired,
  counterIncrease: PropTypes.func.isRequired,
  counterDecrease: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    total: state.counter.total,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...counterActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
