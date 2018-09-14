import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardFooter, ImageHeader} from '../../components/Card';
import Button from '../Button/Button';

class CarLists extends Component {
  constructor(props) {
    super(props);
  }

  static handleClick(e) {
    e.preventDefault();
  }

  renderBuyButton(carId) {
    if (this.props.carAvailability[carId] &&
      this.props.carAvailability[carId].availability === 'In Dealership') {
      return (
        <Button
          type='button'
          onClick={this.props.handleClick}
          text='Buy !'
        />
      );
    }
    return null;
  }

  renderAvailability (carId) {
    if(this.props.carAvailability[carId]) {
      return (
        <p>
          <span className='bold'>Availability</span>
          <span>{this.props.carAvailability[carId].availability}</span>
        </p>
      );
    }
    return (
      <span>N/A</span>
    );
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div>loading ....</div>
      );
    }

    return (
      <div className='wrapper'>
        {this.props.cars.map((car, index) => {
          return (
            <Card key={index}>
              <CardHeader><p>{car.name}</p></CardHeader>
              <ImageHeader imageUrl={car.img}/>
              <CardBody>
                <p>
                  <span className='bold'>Make</span>
                  {car.make}
                </p>
                <p>
                  <span className='bold'>Model</span>
                  {car.model}
                </p>
                <div>{this.renderAvailability(car.id)}</div>
                <p>
                  <span className='bold'>Year</span>
                  {car.year}
                </p>
              </CardBody>
              <CardFooter>
                <div>{this.renderBuyButton(car.id)}</div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CarLists;
