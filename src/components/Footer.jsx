import './Footer.css'

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
          <a className="footer__link" href="#">About</a>
          <a className="footer__link" href="#">Accommodation</a>
          <a className="footer__link" href="#">Transport</a>
          <a className="footer__link" href="#">Tours</a>
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