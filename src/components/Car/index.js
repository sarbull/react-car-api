import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarDetails from './CarDetails';

class Car extends Component {
  render() {
    const {
      acceleration,
      cylinders,
      displacement,
      horsepower,
      id,
      mpg,
      name,
      resource_uri,
      weight,
      year
    } = this.props;

    return (
      <div className="card car" style={{width: '18rem'}}>
        {/* https://loremflickr.com/320/240/${name}/all` retrieves elements slower */}

        <img className="card-img-top" src={`https://loremflickr.com/320/240/cars/all?${id}`} alt="Demo image"/>

        <div className="card-body">
          <h5 className="card-title">{ name }</h5>

          <CarDetails acceleration={acceleration}
                      cylinders={cylinders}
                      displacement={displacement}
                      horsepower={horsepower}
                      mpg={mpg}
                      weight={weight}
                      year={year} />

          <a href="#" className="btn btn-info">Edit</a>
        </div>
      </div>
    );
  }
}
export default Car;