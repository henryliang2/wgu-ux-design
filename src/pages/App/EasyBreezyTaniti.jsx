import { useNavigate } from 'react-router-dom'
import './App.css'

import easy from './easy.png'
import breezy from './breezy.png'
import taniti from './taniti.png'

const Hub = ({
  title,
  image,
  description,
  className
}) => {
  return (
    <div className='ez-hub'>
      <div className='symbol'>
        <img src={image} alt={title} className={className}/>
      </div>
      <h3 className='ez-hub-title'>{title}</h3>
      <p className='ez-description'>{description}</p>
    </div>
  )
}

const Separator = () => <div className='ez-separator'></div>;

const EasyBreezyTaniti = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="ez-container">
        <Hub 
          image={easy}
          className="easy-icon"
          title="EASY"
          description="Taniti serves direct flights and cruise ships from USA and around the world."
        />
        <Separator />
        <Hub 
          image={breezy}
          className="breezy-icon"
          title="BREEZY"
          description="Taniti boasts a year-round tropical climate. Why not get a tan this holiday?"
        />
        <Separator />
        <Hub 
          image={taniti}
          className="taniti-icon"
          title="TANITI"
          description="From shimmering beaches to enchanting forests, Taniti has it all."
        />
      </div>
      <div className="ez-button-container">
        <button className='ez-button' onClick={() => navigate('/about')}>Learn more about Taniti</button>
      </div>
    </>
  )
}

export default EasyBreezyTaniti;

// <a href="https://www.flaticon.com/free-icons/easy-to-use" title="easy to use icons">Easy to use icons created by Freepik - Flaticon</a>

// <a href="https://www.flaticon.com/free-icons/wind" title="wind icons">Wind icons created by Freepik - Flaticon</a>

// <a href="https://www.flaticon.com/free-icons/island" title="island icons">Island icons created by Freepik - Flaticon</a>