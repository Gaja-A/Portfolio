import './App.css';
import './Main.js';

import $ from 'jquery';
import { FaHome, FaUser, FaFile, FaCode, FaEnvelope, FaLaptopCode, FaBars, FaArrowUp } from 'react-icons/fa';  /* FONT AWESOME ICONS */

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Tools from './components/Tools'
import Skills from './components/Skills'

import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      
      <LanguageSelect />
      
      <button type="button" className="mobile-nav-toggle d-lg-none" onClick={() =>  $('body').toggleClass('mobile-nav-active')}><FaBars /></button>
      
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul>
            <li className="active"><a href="#profile"><FaHome /> <span>{t("nav_home")}</span></a></li>
            <li><a href="#about"><FaUser /> <span>{t("nav_profile")}</span></a></li>
            <li><a href="#skills"><FaCode /> <span>{t("nav_skills")}</span></a></li>
            <li><a href="#resume"><FaFile /> <span>{t("nav_parcours")}</span></a></li>
            <li><a href="#portfolio"><FaLaptopCode /> <span>{t("nav_portfolio")}</span></a></li>
            <li><a href="#contact"><FaEnvelope /> <span>{t("nav_contact_me")}</span></a></li>
          </ul>
        </nav>
      </header>

      <section id="profile" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Gajalakshmi Pavade</h1>
          <div>
            <p>{t("job_title")}</p>
          </div>
        </div>
      </section>

      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Tools />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <a href="/#" className="back-to-top"><FaArrowUp /></a>

    </div>
  );
}

export default App;
