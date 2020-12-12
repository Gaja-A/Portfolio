import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  return (

    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{t("resume")}</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">{t("resume_title")}</h3>

            <div className="resume-item">
              <h4>{t("resume_item_title_1")}</h4>
              <h5>2020</h5> ({t("resume_item_level_1")})
              <p><em>{t("resume_item_place_1")}</em></p>
              <p>{t("resume_item_desc_1")}</p>
            </div>

            <div className="resume-item">
              <h4>{t("resume_item_title_2")}</h4>
              <h5>2018 - 2019</h5> ({t("resume_item_level_2")})
              <p><em>{t("resume_item_place_2")}</em></p>
              <p>{t("resume_item_desc_2")}</p>
            </div>

            <div className="resume-item">
              <h4>{t("resume_item_title_3")}</h4>
              <h5>2018</h5> ({t("resume_item_level_3")})
              <p><em>{t("resume_item_place_3")}</em></p>
              <p>{t("resume_item_desc_3")}</p>
            </div>

            <div className="resume-item">
              <h4>{t("resume_item_title_4")}</h4>
              <h5>2014 - 2017</h5> ({t("resume_item_level_4")})
              <p><em>{t("resume_item_place_4")}</em></p>
              <p>{t("resume_item_desc_4")}</p>
            </div>

            <h3 className="resume-title">{t("certification_title")}</h3>
            <div className="resume-item">
              <h4>{t("certification_item_title_1")}</h4>
              <h5>2020</h5>
              <p><em>{t("certification_item_place_1")}</em></p>
              <p>
                <a href="https://freecodecamp.org/certification/fcce6f2fb97-851e-497c-9670-8efd4230cf2e/responsive-web-design" target="_blank" rel="noopener noreferrer">
                  {t("certification_item_desc_1")}
                </a>
              </p>
            </div>

          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">{t("experience_title")}</h3>

            <div className="resume-item">
              <h4>{t("experience_item_title_1")}</h4>
              <h5>2018 - 2020</h5> ({t("experience_contract_1")} &amp; {t("experience_contract_3")})
              <p><em>{t("experience_item_place_1")} </em></p>
              <ul>
                <li>{t("experience_item1_li_1")}</li>
                <li>{t("experience_item1_li_2")}</li>
                <li>{t("experience_item1_li_3")}</li>
                <li>{t("experience_item1_li_4")}</li>
                <li>{t("experience_item1_li_5")}</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>{t("experience_item_title_2")}</h4>
              <h5>2018</h5> ({t("experience_contract_2")})
              <p><em>{t("experience_item_place_2")}</em></p>
              <ul>
                <li>{t("experience_item2_li_1")}</li>
                <li>{t("experience_item2_li_2")}</li>
                <li>{t("experience_item2_li_3")}</li>
                <li>{t("experience_item2_li_4")}</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>{t("experience_item_title_3")}</h4>
              <h5>2018</h5> ({t("experience_contract_2")})
              <p><em>{t("experience_item_place_3")}</em></p>
              <ul>
                <li>{t("experience_item3_li_1")}</li>
                <li>{t("experience_item3_li_2")}</li>
                <li>{t("experience_item3_li_3")}</li>
                <li>{t("experience_item3_li_4")}</li>
                <li>{t("experience_item3_li_5")}</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume