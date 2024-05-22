import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import Hero from './Hero'
import Main from './Main'
import ScenePicker from './ScenePicker'

// https://unsplash.com/photos/calm-body-of-water-during-golden-hour-JP23z_-dA74

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

export default About
