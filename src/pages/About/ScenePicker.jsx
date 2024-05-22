import './About.css'
import { useState } from 'react';

import Adventure from './adventure.jpg'
import Experience from './experience.jpg'
import Relax from './relax.jpg'

const Tabs = ({ children }) => <div className='about__tab__container'>{ children }</div>

const Tab = ({ label, onClick, isActive }) => {

  let className = 'about__tab'
  if (isActive) className += ' about__tab--active'

  return (
    <div className={className} onClick={onClick}>{label}</div>
  );
};

const ScenePicker = () => {
  const [tab, setTab] = useState(0);

  let imgPath;
  let headerText;
  let description;
  switch(tab) {
    case 0: 
      imgPath = Adventure;
      headerText = "Adventure";
      description = "Dive into an underwater wonderland, trek through lush rainforests, and soar above breathtaking landscapes. Taniti is a playground for thrill-seekers and nature enthusiasts alike.";
      break;
    case 1: 
      imgPath = Relax; 
      headerText = "Relax";
      description = "Bask in the sun on our pristine beaches, unwind in our luxurious spa resorts, and savor the gentle ocean breeze. Taniti offers the perfect setting to reconnect with serenity.";
      break;
    case 2:
    default: 
      imgPath = Experience;
      headerText = "Experience";
      description = "Experience the magic of Taniti through our exclusive island tours. From guided excursions to hidden gems, cultural adventures, and nature explorations, Taniti has a diverse range of tours that cater to every interest.";
      break;
  }

  return (
    <>
      <Tabs>
        <Tab 
          label="Adventure" 
          isActive={tab === 0} 
          onClick={() => setTab(0) }
        />
        <Tab 
          label="Relax" 
          isActive={tab === 1} 
          onClick={() => setTab(1) }
        />
        <Tab 
          label="Experience" 
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

// https://unsplash.com/photos/brown-nipa-hut-on-white-sand-beach-during-daytime-4aqH2utAPAs

// https://unsplash.com/photos/green-trees-on-mountain-near-body-of-water-during-daytime-aO5UJIXV0dY

// https://unsplash.com/photos/woman-sitting-on-swing-near-waterfall-6SPU6-KkyhA