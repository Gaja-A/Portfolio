

import Carousel from 'react-bootstrap/Carousel'

import HomePage from '../img/home-page.png'
import CategoryPage from '../img/category-page.png'
import ProductPage from '../img/product-page.png'

const PortfolioGti = () => {
    return (
      <main id="main">

        <section id="portfolio-details" className="portfolio-details">
          <div className="container" data-aos="fade-up">

            <div className="row">

              <div className="col-lg-7">
                <h2 className="portfolio-title text-center">Projet Moondream</h2>
              
                <Carousel className="portfolio-details-carousel">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {HomePage} alt="Page d'accueil"
                    />
                  </Carousel.Item>

                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src= {CategoryPage} alt="Page Catégorie"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {ProductPage} alt="Page Produit"
                    />
                  </Carousel.Item>
                </Carousel>

              </div>

              <div className="col-lg-5 portfolio-info">
                <h3>Information du Projet</h3>
                <ul>
                  <li><strong>Categorié</strong>: Intégration et Développement Web</li>
                  <li><strong>Client</strong>: Moondream </li>
                  <li><strong>Motif</strong>: Alternance / CDD</li>
                  <li><strong>Durée</strong>: 20 mois</li>
                  <li><strong>Site</strong>: <a target="_blank" rel="noopener noreferrer" href="https://www.moondreamwebstore.fr/">www.moondreamwebstore.fr</a></li>
                </ul>

                <p className="portfolio-desc">
                  Moondream est une marque de la Société Brunswick fondée en 1909.
                  C'est un site de e-commerce où j'ai travaillé sur des projets de développement et d'intégration en appliquant une 
                  méthodologie agile utilisant des technos comme <em>HTML5, CSS3, Javascript, jQuery, Bootstrap4, PHP(v5), MySQL, Twig, 
                  Smarty, Prestashop(v1.5 - v1.7)</em> et des outils tels que <em>Git et Gitlab, Redmine, Asana</em>; 
                  et j'ai également travaillé sur des requêtes SQL basées sur les besoins du client. 
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    )
}

export default PortfolioGti
