

import Carousel from 'react-bootstrap/Carousel'

import Home from '../img/art-home.jpg'
import Collection from '../img/collection.jpg'
import Product from '../img/art-product.jpg'

const PortfolioArt = () => {
    return (
      <main id="main">

        <section id="portfolio-details" className="portfolio-details">
          <div className="container" data-aos="fade-up">

            <div className="row">

              <div className="col-lg-7">
                <h2 className="portfolio-title text-center">Projet Personnel</h2>
              
                <Carousel className="portfolio-details-carousel">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {Home} alt="Page d'accueil"
                    />
                  </Carousel.Item>

                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {Collection} alt="Collections"
                    />
                  </Carousel.Item>

                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {Product} alt="Œuvres d'art"
                    />
                  </Carousel.Item>

                </Carousel>

              </div>

              <div className="col-lg-5 portfolio-info">
                <h3>Information du Projet</h3>
                <ul>
                  <li><strong>Categorié</strong>: Création web en React</li>
                  <li><strong>Motif</strong>: Projet Perso </li>
                  <li><strong>Site</strong>: <a target="_blank" rel="noopener noreferrer" href="http://gaja-a.github.io/crazy-artsy/">http://gaja-a.github.io/crazy-artsy</a></li>
                </ul>

                <p className="portfolio-desc">
                  Crazy Artsy est un site e-commerce créé en 2020 en utilisant React.js, Bootstrap4 et jQuery pour mon projet personnel.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    )
}

export default PortfolioArt
