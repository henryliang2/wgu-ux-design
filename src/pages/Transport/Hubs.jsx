import './Transport.css'

import car from './car.jpg'
import shuttle from './shuttle.jpg'
import bus from './bus.jpg'

// https://unsplash.com/photos/a-blue-car-is-parked-on-the-side-of-the-road-D-SytlpF5fE

// https://unsplash.com/photos/a-white-bus-parked-on-the-side-of-the-road-JcVnY_p6aXw

// https://unsplash.com/photos/white-and-black-bus-on-road-during-daytime-7Vt3Kao-JJc

const Hub = ({ title, image, description }) => {
  return (
    <div className='transport__hub'>
      <div className='transport__hub__title'>{title}</div>
      <div className='transport__hub__image' style={{ backgroundImage: `url(${image})` }}></div>
      <p className='transport__hub__text'>{description}</p>
    </div>
  );
}

const Hubs = () => {
  return (
    <ul className='transport__list'>
      <Hub 
        title="Car Rental" 
        description="Enjoy the flexibility to venture off the beaten path. Discover Taniti from the comfort of your own private vehicle."
        image={car}
      />
      <Hub 
        title="Airport Shuttle" 
        description="Designed for comfort and ease, the local airport shuttle provides seamless transfers between the airport and your accommodation."
        image={shuttle}
      />
      <Hub 
        title="Public Bus" 
        description="The public bus network is extremely convenient and connects all of Taniti City. It runs from 5am to 11pm every day."
        image={bus}
      />
    </ul>
  );
}

export default Hubs;