import React, {Component} from 'react';
import {connect} from 'react-redux';
import CarLists from './components/CarLists/CarLists';
import {requestCarListAndAvailability} from './actions';
import './index.css';
import CarFilter from './components/CarFilter/CarFilter';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(requestCarListAndAvailability());
  }

  render() {
    return (
      <div>
        <CarFilter/>
        <CarLists
          cars={this.props.cars}
          carAvailability={this.props.carAvailability}
        />
      </div>
    );
  }
}

const mapStateToProps =state => {
  const { cars, carAvailability, isLoading, error } = state.cars;
  return {
    cars,
    carAvailability,
    isLoading,
    error
  };
};

export default connect(mapStateToProps)(App);
