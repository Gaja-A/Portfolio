
import Profile from '../img/profile.png';
import { FaBirthdayCake, FaMobileAlt, FaCar, FaCity, FaFemale, FaEnvelopeOpen, FaGlobeEurope, FaPlaneDeparture } from 'react-icons/fa';  /* FONT AWESOME ICONS */

const About = () => {
    return (
        
    <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Profile</h2>
        <p>Passionné par la réalisation et les nouvelles technologies et le développement de projets web, je me suis tout naturellement 
          orienté vers une carrière de développeuse web et j'ai donc décidé de m'intégrer vers ce domaine qui m'a toujours intéressé. 
        </p>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <img src={Profile} className="img-fluid" alt="" style={{"opacity" : "0.95"}} />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Développeuse Web &amp; Intégratrice</h3>
          <p className="font-italic">
            Mes compétences dans le développement web sont renforcées par mes formations spécialisées. Je suis une personne autonome avec de 
            bonnes compétences techniques. À cela s'ajoutent mes qualités d'analyse, ma rigueur et ma maîtrise de l'anglais.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><strong><FaBirthdayCake /> Date de naissance:</strong> 14 Avril 1997</li>
                <li><strong><FaMobileAlt /> Mobile:</strong> +33 7 53 41 72 72</li>
                <li><strong><FaCar /> Permis:</strong> B</li>
                <li><strong><FaCity /> Ville:</strong> Garges-lès-Gonesse, FR</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><strong><FaFemale /> Âge:</strong> 23 ans</li>
                <li><strong><FaEnvelopeOpen /> Email:</strong><a href="mailto:gajaadhi07@gmail.com"> gajaadhi07@gmail.com</a></li>
                <li><strong><FaGlobeEurope /> Nationalité:</strong> Française</li>
                <li><strong><FaPlaneDeparture /> Mobilité:</strong> Île-de-France</li>
              </ul>
            </div>
          </div>
          <p>
            Je suis un candidat très motivé et dévoué, doté de bonnes compétences techniques. Ma forte motivation, ma capacité d'adaptation et 
            mon potentiel sont d'autres atouts qui seront bénéfiques au développement d'une entreprise.
          </p>
        </div>
      </div>

    </div>
  </section>
    )
}

export default About;