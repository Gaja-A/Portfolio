import { useState } from 'react';
import { FaEye } from 'react-icons/fa'
import Modal from "react-bootstrap/Modal";  /* BOOTSTRAP MODAL */
import { useTranslation } from "react-i18next";

import PortfolioFfam from '../portfolios/PortfolioFfam'
import PortfolioNet from '../portfolios/PortfolioNet'
import PortfolioGti from '../portfolios/PortfolioGti'
import PortfolioArt from '../portfolios/PortfolioArt'
import PortfolioMe from '../portfolios/PortfolioMe'
import PortfolioEmc from '../portfolios/PortfolioEmc'

import FFAMLogo from '../img/ffam-logo.jpg'
import NetfirstLogo from '../img/netfirst-logo.jpg'
import MoondreamLogo from '../img/moondream-logo.jpg'
import CrazyArtsyLogo from '../img/crazyart-logo.jpg'
import PortfolioLogo from '../img/portfolio-logo.jpg'
import EMCLogo from '../img/emc-logo.png'


const Portfolio = () => {
  const { t } = useTranslation();

  const [isShow, setShow] = useState(false);
  const [isShow1, setShow1] = useState(false);
  const [isShow2, setShow2] = useState(false);
  const [isShow3, setShow3] = useState(false);
  const [isShow4, setShow4] = useState(false);

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

  const isActive4 = () => {
    setShow4(true)
  }
  const isHide4 = () => {
    setShow4(false)
  }

  return (
    
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{t("portfolio")}</h2>
        </div>
     
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          {/* FFAM */}
          <Modal show={isShow} onHide={isHide}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide}>&times;</button>
              <PortfolioFfam />
            </Modal.Body>
          </Modal>
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-logo">
                <img src={FFAMLogo} className="img-fluid" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>FFAM</h4>
                <div className="portfolio-links">
                  <button onClick={isActive} className="btn"><FaEye /></button>
                </div>
              </div>
            </div>
          </div>

          {/* NETFIRST */}
          <Modal show={isShow1} onHide={isHide1}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide1}>&times;</button>
              <PortfolioNet />
            </Modal.Body>
          </Modal>
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-logo">
                <img src={NetfirstLogo} className="img-fluid" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>NETFIRST</h4>
                <div className="portfolio-links">
                  <button onClick={isActive1} className="btn"><FaEye /></button>
                </div>
              </div>
            </div>
          </div>

          {/* MOONDREAM */}
          <Modal show={isShow2} onHide={isHide2}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide2}>&times;</button>
              <PortfolioGti />
            </Modal.Body>
          </Modal>
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-logo">
                <img src={MoondreamLogo} className="img-fluid" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>MOONDREAM</h4>
                <div className="portfolio-links">
                  <button onClick={isActive2} className="btn"><FaEye /></button>
                </div>
              </div>
            </div>
          </div>

          {/* CRAZY ARTSY */}
          <Modal show={isShow3} onHide={isHide3}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide3}>&times;</button>
              <PortfolioArt />
            </Modal.Body>
          </Modal>
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-logo">
                <img src={CrazyArtsyLogo} className="img-fluid" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>CRAZY ARTSY</h4>
                <div className="portfolio-links">
                  <button onClick={isActive3} className="btn"><FaEye /></button>
                </div>
              </div>
            </div>
          </div>

          {/* PORTFOLIO */}
          <Modal show={isShow4} onHide={isHide4}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide4}>&times;</button>
              <PortfolioMe />
            </Modal.Body>
          </Modal>
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-logo">
                <img src={PortfolioLogo} className="img-fluid" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>PORTFOLIO</h4>
                <div className="portfolio-links">
                  <button onClick={isActive4} className="btn"><FaEye /></button>
                </div>
              </div>
            </div>
          </div>

          {/* EMC2 STUDIO */}
          <Modal show={isShow3} onHide={isHide3}>
            <Modal.Body>
              <button className="modal-close close" onClick={isHide3}>&times;</button>
              <PortfolioEmc />
            </Modal.Body>
          </Modal>
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-logo">
                <img src={EMCLogo} className="img-fluid" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>EMC2 Studio</h4>
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