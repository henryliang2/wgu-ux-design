import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import Hero from './Hero'
import Main from './Main'
import TourList from './TourList'

// https://unsplash.com/photos/green-leafed-coconut-trees-4TioRmkVNKU
// https://unsplash.com/photos/a-large-body-of-water-with-a-sunset-in-the-background-hE9SFyYvYDA
// https://unsplash.com/photos/a-grass-hut-in-a-garden--apbqYtGMrc
// https://unsplash.com/photos/a-large-boat-floating-on-top-of-a-large-body-of-water-o9CmHSSGBe4
// https://unsplash.com/photos/white-boats-on-ocean-water-under-gray-sky-epRVcpr6yf8

const ContentWrapper = ({ children }) => (
  <div className='tours__main'>
    <div className='tours__contents'>
      { children }
    </div>
  </div>
);

function Tours() {

  return (
    <>
      <Navigation />
      <Hero />
      <ContentWrapper>
        <Main />
        <TourList />
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default Tours
