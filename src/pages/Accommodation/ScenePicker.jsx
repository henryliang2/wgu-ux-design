import './Accom.css'
import { useState } from 'react';

// https://unsplash.com/photos/white-ceramic-bathtub-PibraWHb4h8

// https://unsplash.com/photos/white-table-with-brown-wicker-chair-beside-plants-iANAdaNu7mg

// https://unsplash.com/photos/brown-wooden-chair-near-white-bed-pBX-ej49-R8

import Private from './private.jpg'
import Bnb from './bnb.jpg'
import Hotel from './hotel.jpg'

const Tabs = ({ children }) => <div className='about__tab__container'>{ children }</div>

const Tab = ({ label, onClick }) => (
  <div className='about__tab' onClick={onClick}>
    {label}
  </div>
);

const ScenePicker = () => {
  const [tab, setTab] = useState(0);

  let imgPath;
  let headerText;
  let description;
  switch(tab) {
    case 0: 
      imgPath = Private;
      headerText = "Private Residences";
      description = "Taniti has hundreds of private residence units available for short-term stays. Nestled in prime locations, these luxurious homes offer the perfect blend of privacy, comfort, and stunning ocean views.";
      break;
    case 1: 
      imgPath = Hotel; 
      headerText = "Luxury Hotels";
      description = "Experience the pinnacle of sophistication and comfort at Taniti's luxury hotels. Tanitian hotels offer a blend of world-class amenities, impeccable service, and breathtaking views.";
      break;
    case 2:
    default: 
      imgPath = Bnb;
      headerText = "Bed & Breakfast";
      description = "Discover the warmth of Tanitian hospitality by staying at a Bed & Breakfast with a licensed host. Tanitian B&Bs offer a cozy, home-like atmosphere with personalized touches that will make your stay truly unforgettable.";
      break;
  }

  return (
    <>
      <Tabs>
        <Tab label="Private Residences" onClick={() => setTab(0) }/>
        <Tab label="Luxury Hotels" onClick={() => setTab(1) }/>
        <Tab label="Bed & Breakfast" onClick={() => setTab(2) }/>
      </Tabs>
      <div className='accom__scene' style={{ backgroundImage: `url(${imgPath})` }}>
        <div className='accom__scene__textual'>
          <h3 className='accom__scene__header'>{ headerText }</h3>
          <p className='accom__scene__description'>{ description }</p>
        </div>
      </div>
    </>
  );
}

export default ScenePicker;

// https://unsplash.com/photos/brown-nipa-hut-on-white-sand-beach-during-daytime-4aqH2utAPAs

// https://unsplash.com/photos/green-trees-on-mountain-near-body-of-water-during-daytime-aO5UJIXV0dY

// https://unsplash.com/photos/woman-sitting-on-swing-near-waterfall-6SPU6-KkyhA