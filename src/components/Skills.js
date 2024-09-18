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

        <div className='badge-row row'>
          <span className="badge-language">HTML5</span>
          <span className="badge-language">CSS3</span>
          <span className="badge-language">Bootstrap</span>
          <span className="badge-language">Webpack</span>
          <span className="badge-language">Materialize CSS</span>
          <span className="badge-language">SASS</span>
     
          <span className="badge-language">Javascript</span>
          <span className="badge-language">EcmaScript</span>
          <span className="badge-language">jQuery</span>
          <span className="badge-language">ReactJS</span>
          <span className="badge-language">PHP</span>
          <span className="badge-language">AJAX / JSON</span>
          <span className="badge-language">API</span>
          <span className="badge-language">MySQL</span>
          <span className="badge-language">phpMyAdmin</span>
          <span className="badge-language">Twig / Smarty</span>
          <span className="badge-language">Prestashop</span>
          <span className="badge-language">Wordpress</span>
          <span className="badge-language">CMS</span>
          <span className="badge-language">Photoshop</span>
        </div>

      </div>
    </section>
  )
}

export default Skills
