
import Modal from "react-bootstrap/Modal";  /* BOOTSTRAP MODAL */

import PortfolioGti from '../PortfolioDetails/PortfolioGti'
import PortfolioNet from '../PortfolioDetails/PortfolioNet'
import PortfolioFfam from '../PortfolioDetails/PortfolioFfam'
import PortfolioArt from '../PortfolioDetails/PortfolioArt'

import MoondreamLogo from '../img/moondream-logo.jpg'
import NetfirstLogo from '../img/netfirst-logo.jpg'
import FFAMLogo from '../img/ffam-logo.jpg'
import CrazyArtsyLogo from '../img/crazyart-logo.jpg'

import { FaEye } from 'react-icons/fa'
import {useState} from 'react';


const Portfolio = () => {

    const [isShow, setShow] = useState(false);
    const [isShow1, setShow1] = useState(false);
    const [isShow2, setShow2] = useState(false);
    const [isShow3, setShow3] = useState(false);

    const isActive = () => {
      setShow(true)
    }
    const isHide = () => {
      setShow(false)
    }

    const isActive1 = () => {
      setShow1(true)
    }
    const isHide1 = () => {
      setShow1(false)
    }

    const isActive2 = () => {
      setShow2(true)
    }
    const isHide2 = () => {
      setShow2(false)
    }
    
    const isActive3 = () => {
      setShow3(true)
    }
    const isHide3 = () => {
      setShow3(false)
    }

    return (
      
        <section id="portfolio" className="portfolio section-bg">

          <Modal show={isShow} onHide={isHide}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide}>&times;</button>
              <PortfolioGti />
            </Modal.Body>
          </Modal>

          <Modal show={isShow1} onHide={isHide1}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide1}>&times;</button>
              <PortfolioNet />
            </Modal.Body>
          </Modal>

          <Modal show={isShow2} onHide={isHide2}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide2}>&times;</button>
              <PortfolioFfam />
            </Modal.Body>
          </Modal>

          <Modal show={isShow3} onHide={isHide3}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide3}>&times;</button>
              <PortfolioArt />
            </Modal.Body>
          </Modal>

          <div className="container" data-aos="fade-up">
    
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>
    
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
    
              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src={MoondreamLogo} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>MOONDREAM</h4>
                    <div className="portfolio-links">
                      <button onClick={isActive} className="btn"><FaEye /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src={NetfirstLogo} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>NETFIRST</h4>
                    <div className="portfolio-links">
                      <button onClick={isActive1} className="btn"><FaEye /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src={FFAMLogo} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>FFAM</h4>
                    <div className="portfolio-links">
                      <button onClick={isActive2} className="btn"><FaEye /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src={CrazyArtsyLogo} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>CRAZY ARTSY</h4>
                    <div className="portfolio-links">
                      <button onClick={isActive3} className="btn"><FaEye /></button>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
      </section>
    )
}

export default Portfolio