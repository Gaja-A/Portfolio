import Carousel from 'react-bootstrap/Carousel'
import Home from '../img/ffam.jpg'
import HomeVrai from '../img/ffam-ori.jpg'

import { useTranslation } from "react-i18next"

const PortfolioFfam = () => {
  const { t } = useTranslation();
    
  return (
      <main id="main">

        <section id="portfolio-details" className="portfolio-details">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-7">
                <h2 className="portfolio-title text-center">{t("project")} FFAM</h2>
              
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
                <h3>{t("project_info")}</h3>
                <ul>
                  <li><strong>{t("project_cat")}</strong>: {t("project_cat_1")}</li>
                  <li><strong>{t("project_client")}</strong>: Fédération Française de sauvegarde des Moulins </li>
                  <li><strong>{t("project_motive")}</strong>: {t("experience_contract_2")}</li>
                  <li><strong>{t("project_url")}</strong>: <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://www.moulinsdefrance.org/">www.moulinsdefrance.org</a></li>
                </ul>
                <p className="portfolio-desc">{t("project_desc_1")}</p>
              </div>

            </div>

          </div>
        </section>
      </main>
    )
}

export default PortfolioFfam
