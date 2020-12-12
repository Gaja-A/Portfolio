import Carousel from 'react-bootstrap/Carousel'
import HomePage from '../img/home-page.png'
import CategoryPage from '../img/category-page.png'
import ProductPage from '../img/product-page.png'

import { useTranslation } from "react-i18next"

const PortfolioGti = () => {
  const { t } = useTranslation();
  
  return (
    <main id="main">

      <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">

          <div className="row">

            <div className="col-lg-7">
              <h2 className="portfolio-title text-center">{t("project")} Moondream</h2>
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
              <h3>{t("project_info")}</h3>
              <ul>
                <li><strong>{t("project_cat")}</strong>: {t("project_cat_3")}</li>
                <li><strong>{t("project_client")}</strong>: Moondream </li>
                <li><strong>{t("project_motive")}</strong>: {t("experience_contract_1")} &amp; {t("experience_contract_3")}</li>
                <li><strong>{t("project_url")}</strong>: <a target="_blank" rel="noopener noreferrer" href="https://www.moondreamwebstore.fr/">www.moondreamwebstore.fr</a></li>
              </ul>
              <p className="portfolio-desc">{t("project_desc_3")}</p>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default PortfolioGti
