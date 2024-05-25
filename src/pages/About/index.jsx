import { ScrollRestoration } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import Hero from './Hero'
import Main from './Main'
import ScenePicker from './ScenePicker'
import TourCTA from './TourCTA'

const ContentWrapper = ({ children }) => (
  <div className='about__main'>
    <div className='about__contents'>
      { children }
    </div>
  </div>
);

function About() {

  return (
    <>
      <ScrollRestoration />
      <Navigation />
      <Hero />
      <ContentWrapper>
        <Main />
        <ScenePicker />
        <TourCTA />
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default About
