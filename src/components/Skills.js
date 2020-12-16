import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{t("skill_title")}</h2>
            <p>{t("skill_desc")}</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">
            <div className="progress-skills">

              <div className="progressBar">
                <div className="d-flex">
                  <span>HTML5 / CSS3</span>
                  <span className="ml-auto">100%</span>
                </div>
                <ProgressBar striped now={100} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Bootstrap 4</span>
                  <span className="ml-auto">100%</span>
                </div>
                <ProgressBar striped now={100} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>JavaScript / ES6</span>
                  <span className="ml-auto">95%</span>
                </div>
                <ProgressBar striped now={95} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>AJAX / JSON</span>
                  <span className="ml-auto">85%</span>
                </div>
                <ProgressBar striped now={85} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>React.js</span>
                  <span className="ml-auto">75%</span>
                </div>
                <ProgressBar striped now={75} />
              </div>
              

              <div className="progressBar">
                <div className="d-flex">
                  <span>PHP</span>
                  <span className="ml-auto">75%</span>
                </div>
                <ProgressBar striped now={75} />
              </div>
              
              <div className="progressBar">
                <div className="d-flex">
                  <span>E-Commerce / CMS / Prestashop</span>
                  <span className="ml-auto">90%</span>
                </div>
                <ProgressBar striped now={90} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Infographie</span>
                  <span className="ml-auto">65%</span>
                </div>
                <ProgressBar striped now={65} />
              </div>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress-skills">

              <div className="progressBar">
                <div className="d-flex">
                  <span>Webpack / SASS / SCSS</span>
                  <span className="ml-auto">85%</span>
                </div>
                <ProgressBar striped now={85} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Materialize CSS</span>
                  <span className="ml-auto">70%</span>
                </div>
                <ProgressBar striped now={70} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>jQuery</span>
                  <span className="ml-auto">95%</span>
                </div>
                <ProgressBar striped now={95} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Node.js</span>
                  <span className="ml-auto">90%</span>
                </div>
                <ProgressBar striped now={90} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>AngularJS / VueJS</span>
                  <span className="ml-auto">70%</span>
                </div>
                <ProgressBar striped now={70} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>MySQL</span>
                  <span className="ml-auto">100%</span>
                </div>
                <ProgressBar striped now={100} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Smarty / Twig</span>
                  <span className="ml-auto">90%</span>
                </div>
                <ProgressBar striped now={90} />
              </div>

              <div className="progressBar">
                <div className="d-flex">
                  <span>Photoshop / Gimp</span>
                  <span className="ml-auto">65%</span>
                </div>
                <ProgressBar striped now={65} />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills