import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';  /* FONT AWESOME ICONS */
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{t("contact")}</h2>
        </div>

        <div className="info">
          <div className="row mt-1 text-center">
            <div className="col-lg-6 contact_info">
              <div><FaEnvelope /></div>
              <div>
                <h4>{t("mail")}:</h4>
                <p><a href="mailto:gajaadhi07@gmail.com"> gajaadhi07@gmail.com</a></p>
              </div>
            </div>

            <div className="col-lg-6 contact_info">
                <div><FaPhoneAlt /></div>
                <div>
                  <h4>{t("phone")}:</h4>
                  <p>+33 7 53 41 72 72</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
}

export default Contact