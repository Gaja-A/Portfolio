import Carousel from 'react-bootstrap/Carousel'
import Paris1944 from '../img/1944Paris.jpg'
import Velo9 from '../img/velo9.jpg'
import MemoireduDroit from '../img/memoiredudroit.jpg'
import GalerieMobler from '../img/galeriemobler.jpg'
import Entrepreneuriade from '../img/entrepreneuriade.jpg'
import WebOrganizer from '../img/organizer.jpg'
import BookYourHome from '../img/bookyourhome.jpg'
import VeezPack from '../img/veezPack.jpg'

import { useTranslation } from "react-i18next"

const PortfolioEmc = () => {
  const { t } = useTranslation();
  
  return (
    <main id="main">

      <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">

          <div className="row">

            <div className="col-lg-7">
              <h2 className="portfolio-title text-center">{t("project")} EMC2 Studio</h2>
              <Carousel className="portfolio-details-carousel">
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src= {Paris1944} alt="1944 Paris"
                  />
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src= {Velo9} alt="Velo 9"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {MemoireduDroit} alt="Memoire du Droit"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {GalerieMobler} alt="Galerie Mobler"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {Entrepreneuriade} alt="Entrepreneuriade"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {WebOrganizer} alt="WebOrganizer"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {BookYourHome} alt="Book your Home"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {VeezPack} alt="VeezPack"
                  />
                </Carousel.Item>
              </Carousel>

            </div>

            <div className="col-lg-5 portfolio-info">
              <h3>{t("project_info")}</h3>
              <ul>
                <li><strong>{t("project_cat")}</strong>: {t("project_cat_3")}</li>
                <li><strong>{t("project_client")}</strong>: EMC2 Studio </li>
                <li><strong>{t("project_motive")}</strong>: {t("experience_contract_4")}</li>
                <li><strong>{t("project_client")}s</strong>: 
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://1944.paris/">1944 Paris</a> <br></br>
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://velo9.com/">Velo 9</a> <br></br>
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://memoiredudroit.fr/">Memoire du Droit</a> <br></br>
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://www.galerie-mobler.com/">Galerie Mobler</a> <br></br>
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://entrepreneuriades-plainevallee.fr/">Entrepreneuriades</a> <br></br>
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://weborganizer.fr/home_page.html">WebOrganizer</a> <br></br>
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://bookyourhome.ovh/">Book Your Home</a> <br></br>
                    <a className="url_link" target="_blank" rel="noopener noreferrer" href="https://pro.veezpack.com/">VeezPack</a> <br></br>
                </li>
              </ul>
              <p className="portfolio-desc">{t("project_desc_6")}</p>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default PortfolioEmc
