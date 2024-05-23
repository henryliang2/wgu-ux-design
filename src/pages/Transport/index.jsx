import { ScrollRestoration } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import Hero from './Hero'
import Main from './Main'
import Hubs from './Hubs'

// https://unsplash.com/photos/green-leafed-coconut-trees-4TioRmkVNKU
// https://unsplash.com/photos/a-large-body-of-water-with-a-sunset-in-the-background-hE9SFyYvYDA
// https://unsplash.com/photos/a-grass-hut-in-a-garden--apbqYtGMrc
// https://unsplash.com/photos/a-large-boat-floating-on-top-of-a-large-body-of-water-o9CmHSSGBe4
// https://unsplash.com/photos/white-boats-on-ocean-water-under-gray-sky-epRVcpr6yf8

const ContentWrapper = ({ children }) => (
  <div className='transport__main'>
    <div className='transport__contents'>
      { children }
    </div>
  </div>
);

function Transport() {

  return (
    <>
      <ScrollRestoration />
      <Navigation />
      <Hero />
      <ContentWrapper>
        <Main />
        <Hubs />
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default Transport
