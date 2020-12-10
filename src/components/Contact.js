
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';  /* FONT AWESOME ICONS */

const Contact = () => {
    return (
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contactez-moi</h2>
        </div>

        <div className="row mt-1">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <FaMapMarkerAlt />
                <h4>Lieu:</h4>
                <p>95140 Garges-lès-Gonesse, France</p>
              </div>

              <div className="email">
                <FaEnvelope />
                <h4>Email:</h4>
                <p><a href="mailto:gajaadhi07@gmail.com"> gajaadhi07@gmail.com</a></p>
              </div>

              <div className="phone">
                <FaPhoneAlt />
                <h4>Appelez-moi au:</h4>
                <p>+33 7 53 41 72 72</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="/" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Votre nom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Votre adresse e-mail" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Merci de m'avoir contacté! Je vous répondrai bientôt.</div>
              </div>
              <div className="text-center"><button type="submit" className="btn">Envoyer</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    )
}

export default Contact