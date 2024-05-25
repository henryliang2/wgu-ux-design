import './About.css'
import { useState } from 'react';

import yellowLeaf from './yellowLeaf.jpg'
import merriton from './merriton.jpg'
import tanitiCity from './tanitiCity.jpg'


// https://unsplash.com/photos/green-trees-on-mountain-near-body-of-water-during-daytime-aO5UJIXV0dY

// https://unsplash.com/photos/white-dining-tables-outdoors-GjMaXHKVnm4

// https://unsplash.com/photos/a-street-lined-with-trees-and-parked-cars-L0LRP0L6LrA

const Tabs = ({ children }) => <div className='about__tab__container'>{ children }</div>

const Tab = ({ label, onClick, isActive }) => {

  let className = 'about__tab'
  if (isActive) className += ' about__tab--active'

  return (
    <div className={className} onClick={onClick}>
      {label}
      <div className='active-marker'></div>
    </div>
  );
};

const ScenePicker = () => {
  const [tab, setTab] = useState(0);

  let imgPath;
  let headerText;
  let description;
  switch(tab) {
    case 0: 
      imgPath = yellowLeaf;
      headerText = "Yellow Leaf Bay";
      description = "Surrounded by native architecture and pristine white beaches, Yellow Leaf Bay is the picture-perfect tropical experience you've always dreamed of. Here, you can discover beautiful hiking trails - even one leading up to our magnificent volcano.";
      break;
    case 1: 
      imgPath = merriton; 
      headerText = "Merriton Landing";
      description = "The rapidly developing town of Merriton Landing is your little seaside escape in Taniti. Here, you can explore quiant cafes on the water and try fun activities like paddleboarding or sea kayaking.";
      break;
    case 2:
    default: 
      imgPath = tanitiCity;
      headerText = "Taniti City";
      description = "Discover Taniti City, the vibrant heart of our island. In Tanity City, you can find lively markets with local crafts and produce. Taniti City is home to two museums that enshrine the rich history of Tanitians from generations past.";
      break;
  }

  return (
    <>
      <Tabs>
        <Tab 
          label="Yellow Leaf Bay" 
          isActive={tab === 0} 
          onClick={() => setTab(0) }
        />
        <Tab 
          label="Merriton Landing" 
          isActive={tab === 1} 
          onClick={() => setTab(1) }
        />
        <Tab 
          label="Taniti City" 
          isActive={tab === 2} 
          onClick={() => setTab(2) }
        />
      </Tabs>
      <div className='about__scene' style={{ backgroundImage: `url(${imgPath})` }}>
        <div className='about__scene__textual'>
          <h3 className='about__scene__header'>{ headerText }</h3>
          <p className='about__scene__description'>{ description }</p>
        </div>
      </div>
    </>
  );
}

export default ScenePicker;