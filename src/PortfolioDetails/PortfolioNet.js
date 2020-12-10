

import Carousel from 'react-bootstrap/Carousel'

import Auchan from '../img/auchan.png'
import SocieteGenerale from '../img/societe-generale.png'
import Lyreco from '../img/lyreco.png'

const PortfolioNet = () => {
    return (
      <main id="main">

        <section id="portfolio-details" className="portfolio-details">
          <div className="container" data-aos="fade-up">

            <div className="row">

              <div className="col-lg-7">
                <h2 className="portfolio-title text-center">Projet Netfirst</h2>
              
                <Carousel className="portfolio-details-carousel">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {Auchan} alt="Auchan"
                    />
                  </Carousel.Item>

                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {SocieteGenerale} alt="Société Générale"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {Lyreco} alt="Lyreco"
                    />
                  </Carousel.Item>
                </Carousel>

              </div>

              <div className="col-lg-5 portfolio-info">
                <h3>Information du Projet</h3>
                <ul>
                  <li><strong>Categorié</strong>: Conception de sites web</li>
                  <li><strong>Client</strong>: Agence Netfirst </li>
                  <li><strong>Motif</strong>: Stage</li>
                  <li><strong>Durée</strong>: 6 semaines</li>
                  <li><strong>Site</strong>: <a target="_blank" rel="noopener noreferrer" href="https://netfirst.fr/">https://netfirst.fr</a></li>
                </ul>

                <p className="portfolio-desc">
                  Netfirst est une agence experte en digitalisation de contenus créée en 2011.
                  Chez Netfirst, j'ai travaillé pour de nombreux clients comme <em>Auchan, Lyreco, Société Générale, Atout France, Chanel, 
                  Groupe Arcade</em> et bien d'autres. Mes tâches concernent la conception d'un site web nouveau et existant en mode réactif en 
                  utilisant <em>HTML5, CSS3, Javascript, Bootstrap4 et jQuery</em>; et le développement des panneaux d'accueil en utilisant l'outil de 
                  publication numérique.  
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    )
}

export default PortfolioNet
