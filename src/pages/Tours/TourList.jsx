import './Tours.css'

// https://unsplash.com/photos/brown-wooden-table-decor-on-brown-wooden-table-S2Gru9_krRs

// https://unsplash.com/photos/white-boat-on-ocean-l8yrg3p21Oo

// https://unsplash.com/photos/woman-in-black-wetsuit-swimming-in-water-XGygXrXUSGM

// https://unsplash.com/photos/a-man-standing-on-top-of-a-mountain-holding-a-stick-Pw9JzpFWWZE

import pottery from './pottery.jpg'
import boat from './boat.jpg'
import snorkel from './snorkel.jpg'
import volcano from './volcano.jpg'

const TourItem = ({ title, description, image }) => {
  return (
    <li className='tour__item'>
      <div className='tour__item__image' style={{ backgroundImage: `url(${image})` }}></div>
      <div className='tour__item__text'>
        <h3 className='tour__item__title'>{title}</h3>
        <p className='tour__item__desc'>{description}</p>
      </div>
    </li>
  );
}

const TourList = () => {
  return (
    <ul className='tour__list'>
      <TourItem
        title="Traditional Pottery Tour"
        description="Organized by skilled artisans deeply rooted in the island's traditions, this immersive experience offers a glimpse into Taniti's history and culture."
        image={pottery}
      />
      <TourItem
        title="Sunset Boat Cruise"
        description="Lounge on the deck of a luxury yacht while drinking wine and soaking in the majestic beauty of the tropical landscape."
        image={boat}
      />
      <TourItem
        title="Dive with Sea Turtles"
        description="Embark on an unforgettable aquatic adventure with Taniti's native sea turtles! This tour is led by experienced divers who know every nook and cranny of the island's beautiful reefs."
        image={snorkel}
      />
      <TourItem
        title="Guided Hike of the Volcano"
        description="Take a terrific hike through Taniti's dense tropical forests that culminates in an awe-inspiring view of our local volcano."
        image={volcano}
      />
    </ul>
    );
}

export default TourList;