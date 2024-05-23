import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <div className="footer">
      <div className='footer__header'>
        <h3 className='footer__title'>VISIT TANITI</h3>
        <p className='footer__copyright'>Copyright 2024 Tourism Taniti.<br />All rights reserved.</p>
      </div>
      <div className='footer__links'>
        <h3 className='footer__title'>LINKS</h3>
        <p className='footer_links'>
          <Link className="footer__link" to="/about">About</Link>
          <Link className="footer__link" to="/accommodation">Accommodation</Link>
          <Link className="footer__link" to="/transport">Transport</Link>
          <Link className="footer__link" to="/tours">Tours</Link>
        </p>
      </div>
      <div className='footer__social'>
        <h3 className='footer__title'>SOCIAL</h3>
        <a className="footer__link" href="#">Graminsta</a>
        <a className="footer__link" href="#">Bookface</a>
        <a className="footer__link" href="#">Toktik</a>
      </div>
    </div>
  )
}

export default Footer;