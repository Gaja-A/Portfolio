import { FaTools, FaGlobe } from 'react-icons/fa';  /* FONT AWESOME ICONS */
import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();

  return (
    <section id="tools" className="tools section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 tools">

            <div className="section-title">
              <h2><FaTools /> {t("tools")}</h2>
            </div>

            <div className="progress-tools">
              <div className="progressBar">
                <div className="d-flex">
                  <span>Git / Gitlab</span>
                  <span className="ml-auto">100%</span>
                </div>
                <ProgressBar striped now={100} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Postman</span>
                  <span className="ml-auto">80%</span>
                </div>
                <ProgressBar striped now={80} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Redmine</span>
                  <span className="ml-auto">95%</span>
                </div>
                <ProgressBar striped now={95} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>npm / Linux</span>
                  <span className="ml-auto">95%</span>
                </div>
                <ProgressBar striped now={95} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Visual Studio Code / Sublime / Atos</span>
                  <span className="ml-auto">100%</span>
                </div>
                <ProgressBar striped now={100} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Notepad ++</span>
                  <span className="ml-auto">90%</span>
                </div>
                <ProgressBar striped now={90} />
              </div>
            </div>

          </div>

          <div className="col-lg-6 languages">
            <div className="section-title">
              <h2><FaGlobe /> {t("languages")}</h2>
            </div>

            <div className="progress-languages">
              <div className="progressBar">
                <div className="d-flex">
                  <span>{t("language_1")}</span>
                  <span className="ml-auto">100%</span>
                </div>
                <ProgressBar striped now={100} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>{t("language_2")}</span>
                  <span className="ml-auto">95%</span>
                </div>
                <ProgressBar striped now={95} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>{t("language_3")}</span>
                  <span className="ml-auto">100%</span>
                </div>
                <ProgressBar striped now={100} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Tools