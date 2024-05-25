import { useNavigate } from "react-router-dom";

const TourCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="tour-cta">
      <h3 className="tour-cta__title">EXPLORE YOUR TANITI</h3>
      <p>
        Experience the best of our tropical paradise with an exclusive tour package designed just for you. From breathtaking sunset cruises to action-packed diving expeditions, our tour packages offer you the the ability to experience the best Taniti has to offer.
      </p>
      <button onClick={() => navigate('/tours')} className="tour-cta__button">Book a Tour</button>
    </div>
  )
}

export default TourCTA;