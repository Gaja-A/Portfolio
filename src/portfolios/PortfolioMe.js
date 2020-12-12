import Carousel from 'react-bootstrap/Carousel'
import Home from '../img/resume.jpg'
import Projects from '../img/portfolio.jpg'

import { useTranslation } from "react-i18next";

const PortfolioMe = () => {
  const { t } = useTranslation();

  return (
    <main id="main">
      <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">

          <div className="row">
            <div className="col-lg-7">
              <h2 className="portfolio-title text-center">{t("personal_project")}</h2>
            
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
                    src= {Projects} alt="Collections"
                  />
                </Carousel.Item>
              </Carousel>

            </div>

            <div className="col-lg-5 portfolio-info">
              <h3>{t("project_info")}</h3>
              <ul>
                <li><strong>{t("project_cat")}</strong>: {t("project_cat_5")}</li>
                <li><strong>{t("project_motive")}</strong>: {t("personal_project")} </li>
                <li><strong>{t("project_url")}</strong>: <a target="_blank" rel="noopener noreferrer" href="http://gaja-a.github.io/Portfolio/">http://gaja-a.github.io/portfolio</a></li>
              </ul>
              <p className="portfolio-desc">{t("project_desc_5")}</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default PortfolioMe
