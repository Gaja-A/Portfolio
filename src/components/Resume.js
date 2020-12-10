
const Resume = () => {
    return (
        <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Parcours</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Diplômes et Formations</h3>
            <div className="resume-item">
              <h4>Concepteur Développer Front End</h4>
              <h5>2020</h5> (Certification TOSA)
              <p><em>GRETA 92, Boulogne-Billancourt, FR</em></p>
              <p>
              Maîtriser toute la chaine de développement front end, des spécifications préliminaires à la production et à la 
              maintenance en passant par le codage. Et développer de bonnes compétences en Reactjs.
              </p>
            </div>
            <div className="resume-item">
              <h4>Expert Digital Architecte Web</h4>
              <h5>2018 - 2019</h5> (Master II - Formation)
              <p><em>Digital School of Paris, Paris, FR</em></p>
              <p>
                Capacité de superviser un service informatique. En plus de l’expertise web, 
                l’ensemble des compétences en gestion et management.
              </p>
            </div>
            <div className="resume-item">
              <h4>Concepteur Développeur Informatique</h4>
              <h5>2018</h5> (Master I - Diplômé)
              <p><em>GRETA MTE 93, Montreuil, FR</em></p>
              <p>
                En fonction de l'analyse des besoins, participer à la phase de spécification détaillée, et mettre en œuvre la 
                solution avec les technologies retenues.
              </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Computer Applications</h4>
              <h5>2014 - 2017</h5> (Licence - Diplômé)
              <p><em>Saradha Gangadharan College, Pondichéry, INDE</em></p>
              <p>Traite des bases du développement de logiciels et des applications informatiques.</p>
            </div>

            <h3 className="resume-title">Certifications</h3>
            <div className="resume-item">
              <h4>Responsive Web Design</h4>
              <h5>2020</h5>
              <p><em>freeCodeCamp, Formation à distance</em></p>
              <p>
                <a href="https://freecodecamp.org/certification/fcce6f2fb97-851e-497c-9670-8efd4230cf2e/responsive-web-design" target="_blank" rel="noopener noreferrer">
                  Voir la référence
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Expériences professionnelles</h3>
            <div className="resume-item">
              <h4>Intégratrice Développeuse Web</h4>
              <h5>2018 - 2020</h5> (Contrat Pro / CDD)
              <p><em>Gestion Textile Internationale, Aubervilliers, FR </em></p>
              <ul>
                <li>Assurer la maintenance et l'optimisation des sites dans 14 pays via Prestashop</li>
                <li>Gérer la migration des sites</li>
                <li>Analyser des problèmes techniques</li>
                <li>Effectuer des tests et créer une interface ergonomique</li>
                <li>Suivre la qualité des développements : code review, tests, mise en préproduction et production</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Développeuse Front-end</h4>
              <h5>2018</h5> (Stage)
              <p><em>Agence Netfirst, Asnières-sur-Seine, FR</em></p>
              <ul>
                <li>Développer des panneaux d'accueil responsive</li>
                <li>Concevoir des sites web</li>
                <li>Faire des productions sur l'outil d'édition numérique</li>
                <li>Rechercher des solutions techniques diverses</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Conceptrice Web</h4>
              <h5>2018</h5> (Stage)
              <p><em>Fédération Française des Associations de sauvegarde des Moulins, Noisy-le-Grand, FR</em></p>
              <ul>
                <li>Réaliser le rétro-ingénierie sur le site FFAM</li>
                <li>Cartographier la totalité du site</li>
                <li>Repérer les doublons et les faiblesses actuelles</li>
                <li>Comprendre la base de données et ses interfaces avec les pages</li>
                <li>Concevoir une maquette de présentation</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Resume