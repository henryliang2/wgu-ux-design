import './Navigation.css'
import { Link } from "react-router-dom";

const Navigation = () => {
  
  return (
    <nav>
      <div>
        <Link to="/"><span className="nav__home">VISIT TANITI</span></Link>
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/accommodation">Accommodation</Link>
        <Link to="/transport">Transport</Link>
        <Link to="/tours">Tours</Link>
      </div>
    </nav>
  )
}

export default Navigation;