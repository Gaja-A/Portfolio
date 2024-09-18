import Carousel from 'react-bootstrap/Carousel'
import Auchan from '../img/auchan.png'
import SocieteGenerale from '../img/societe-generale.png'
import Lyreco from '../img/lyreco.png'

import { useTranslation } from "react-i18next"

const PortfolioNet = () => {
  const { t } = useTranslation();
  
  return (
    <main id="main">
      <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">

          <div className="row">

            <div className="col-lg-7">
              <h2 className="portfolio-title text-center">{t("project")} Netfirst</h2>
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
              <h3>{t("project_info")}</h3>
              <ul>
                <li><strong>{t("project_cat")}</strong>: {t("project_cat_2")}</li>
                <li><strong>{t("project_client")}</strong>: Agence Netfirst </li>
                <li><strong>{t("project_motive")}</strong>: {t("experience_contract_2")}</li>
                {/* <li><strong>{t("project_url")}</strong>: <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://netfirst.fr/">https://netfirst.fr</a></li> */}
              </ul>
              <p className="portfolio-desc">{t("project_desc_2")}</p>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default PortfolioNet
