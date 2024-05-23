// https://unsplash.com/photos/white-table-with-brown-wicker-chair-beside-plants-iANAdaNu7mg

import { ScrollRestoration } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import Hero from './Hero'
import Main from './Main'
import ScenePicker from './ScenePicker'

const ContentWrapper = ({ children }) => (
  <div className='accom__main'>
    <div className='accom__contents'>
      { children }
    </div>
  </div>
);

function Accommodation() {

  return (
    <>
      <ScrollRestoration />
      <Navigation />
      <Hero />
      <ContentWrapper>
        <Main />
        <ScenePicker />
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default Accommodation
