import Profile from '../img/profile.png';
import { FaBirthdayCake, FaMobileAlt, FaCar, FaCity, FaFemale, FaEnvelopeOpen, FaGlobeEurope, FaPlaneDeparture } from 'react-icons/fa';  /* FONT AWESOME ICONS */
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (   
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{t("nav_profile")}</h2>
          <p>{t("profile_desc")}</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={Profile} className="img-fluid" alt="" style={{"opacity" : "0.95"}} />
          </div>

          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{t("profile_title")}</h3>
            <p className="font-italic">{t("profile_sub")}</p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><strong><FaBirthdayCake /> {t("dob_title")}:</strong> {t("dob")}</li>
                  <li><strong><FaMobileAlt /> {t("mobile_title")}:</strong> +33 7 53 41 72 72</li>
                  <li><strong><FaCar /> {t("license_title")}:</strong> {t("driving_license")}</li>
                  <li><strong><FaCity /> {t("city_title")}:</strong> {t("city")}</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><strong><FaFemale /> {t("age_title")}:</strong> {t("age")}</li>
                  <li><strong><FaEnvelopeOpen /> {t("email")}:</strong><a href="mailto:gajaadhi07@gmail.com"> gajaadhi07@gmail.com</a></li>
                  <li><strong><FaGlobeEurope /> {t("nationality_title")}:</strong> {t("nationality")}</li>
                  <li><strong><FaPlaneDeparture /> {t("travel_title")}:</strong> {t("travel")}</li>
                </ul>
              </div>
            </div>

            <p>{t("profile_sub_desc")}</p>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default About;