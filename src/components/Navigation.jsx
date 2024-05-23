import { useState } from 'react'; 
import './Navigation.css'
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav>
      <div>
        <Link to="/"><span className="nav__home">VISIT TANITI</span></Link>
      </div>
      <div className='nav-desktop'>
        <Link to="/about">About</Link>
        <Link to="/accommodation">Accommodation</Link>
        <Link to="/transport">Transport</Link>
        <Link to="/tours">Tours</Link>
      </div>
      <div className='nav-mobile' onClick={() => setIsOpen(val => !val)}>
        <span>MENU</span>
        { isOpen && (
            <div className='nav-mobile__dropdown'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/accommodation">Accommodation</Link>
              <Link to="/transport">Transport</Link>
              <Link to="/tours">Tours</Link>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navigation;