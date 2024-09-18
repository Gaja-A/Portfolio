import { useTranslation } from "react-i18next";

const Recommendations = () => {
  const { t } = useTranslation();

  return (

    <section id="recommendations" className="recommendations">

      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("recommendations")}</h2>
        </div>

        <div className="row recommendations-block">

          <div className="col-md-6 col-sm-12">
            <div className="recommendations-item shadow p-3 mb-5 rounded">
              <h4>{t("recommendations_item_title_1")}</h4>
              <p><em>{t("recommendations_item_place_1")}</em></p>
              <p>{t("recommendations_item_desc_1_1")}</p>
              <p>{t("recommendations_item_desc_1_2")}<br />{t("recommendations_item_desc_1_3")}</p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="recommendations-item shadow p-3 mb-5 rounded">
              <h4>{t("recommendations_item_title_2")}</h4>
              <p><em>{t("recommendations_item_place_2")}</em></p>
              <p>{t("recommendations_item_desc_2_1")}</p>
              <p>{t("recommendations_item_desc_2_2")}</p>
              <p>{t("recommendations_item_desc_2_3")}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Recommendations