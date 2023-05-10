import React from 'react'
import { BsWhatsapp,BsInstagram,BsFacebook } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
            <div className="first-row">
                <div className="column logo">
                    <h2>Tickets<span className='logosecond'>Shows</span></h2>
                    <p>Giving you and your familly unforgettable shows is our priority</p>
                </div>
                <div className="column">
                    <div>
                        <h3>About</h3>
                        <a href="http://localhost:3000/">About us</a>
                        <a href="http://localhost:3000/">Features</a>
                        <a href="http://localhost:3000/">News&Blog</a>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <a href="http://localhost:3000/">How we work</a>
                        <a href="http://localhost:3000/">Capital</a>
                        <a href="http://localhost:3000/">Support</a>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <h3>Support</h3>
                        <a href="http://localhost:3000/">Admin</a>
                        <a href="http://localhost:3000/">Support Center</a>
                        <a href="http://localhost:3000/">Contact Us</a>
                    </div>
                    <div>
                        <h3>Follow Us</h3>
                        <div className="social"><BsWhatsapp /></div>
                        <div className="social"><BsInstagram /></div>
                        <div className="social"><BsFacebook /></div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="second-row">
                <div className="contract">
                    <a href="http://localhost:3000/">Terms&Agreement</a>
                    <a href="http://localhost:3000/">Privacy Policy</a>
                </div>
                <p className="copyright">Ⓒ Jantar 2023, All right reserved.</p>
            </div>
    </div>
  )
}

export default Footer