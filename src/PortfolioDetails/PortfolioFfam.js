

import Carousel from 'react-bootstrap/Carousel'

import Home from '../img/ffam.jpg'
import HomeVrai from '../img/ffam-ori.jpg'

const PortfolioFfam = () => {
    return (
      <main id="main">

        <section id="portfolio-details" className="portfolio-details">
          <div className="container" data-aos="fade-up">

            <div className="row">

              <div className="col-lg-7">
                <h2 className="portfolio-title text-center">Projet FFAM</h2>
              
                <Carousel className="portfolio-details-carousel">

                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {Home} alt="Maquette"
                    />
                  </Carousel.Item>

                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {HomeVrai} alt="Page d'accueil"
                    />
                  </Carousel.Item>
                  
                </Carousel>

              </div>

              <div className="col-lg-5 portfolio-info">
                <h3>Information du Projet</h3>
                <ul>
                  <li><strong>Categorié</strong>: Conception de la maquette de présentation</li>
                  <li><strong>Client</strong>: Fédération Française de sauvegarde des Moulins </li>
                  <li><strong>Motif</strong>: Stage</li>
                  <li><strong>Durée</strong>: 2 semaines</li>
                  <li><strong>Site</strong>: <a target="_blank" rel="noopener noreferrer" href="https://www.moulinsdefrance.org/">www.moulinsdefrance.org</a></li>
                </ul>

                <p className="portfolio-desc">
                    Fédération Française des Associations de sauvegarde des Moulins (FFAM) créée en 1977. 
                    Là, ma mission était d'étudier et de réaliser la rétro-ingénierie sur le site de la FFAM. Et les objectifs sont de cartographier la 
                    totalité du site, d'identifier les doublons et les faiblesses actuelles, puis de <em>proposer une nouvelle ergonomie</em>.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    )
}

export default PortfolioFfam
