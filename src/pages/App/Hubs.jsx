import './App.css'

import condo from './hub-condo-2.jpg'
import car from './hub-car.jpg'
import boat from './hub-boat.png'

const Hub = ({
  title,
  mainContent,
  priceContent,
  image
}) => {

  return (
    <div className='app__hub'>
      <h3 className='app__hub__title'>{title}</h3>
      <div 
        className='app__hub__content-wrapper'
        style={{ backgroundImage: image ? `url(${image})` : null }}
      >
        <h3 className='app__hub__header'>
          <p className="app__hub__main-content">{mainContent}</p>
          <p className="app__hub__price-content">{priceContent}</p>
        </h3>
        <div className='app__hub__button-container'>
          <button className='app__hub__button'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

const Hubs = () => {
  // https://unsplash.com/photos/green-trees-near-swimming-pool-during-daytime-nI4aC1kaTRc

  // https://unsplash.com/photos/a-blue-car-is-parked-on-the-side-of-the-road-D-SytlpF5fE

  // https://unsplash.com/photos/birds-eye-photography-of-boat-on-body-of-water-nfF5-G6cFwY
  
  return (
    <div className='app__hubs__container'>
      <Hub 
        title="Accommodation"
        mainContent="Private Condos"
        priceContent="Starting at $189 / night"
        image={condo}
      />
      <Hub 
        title="Transport" 
        mainContent="Car Rentals"
        priceContent="Starting at $39 / day"
        image={car}
      /> 
      <Hub 
        title="Tours" 
        mainContent="Tour Packages"
        priceContent="Starting at $59"
        image={boat}
      />
    </div>
  )
}

export default Hubs;