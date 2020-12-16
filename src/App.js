import './App.css';
import './Main.js';

import AOS from "aos";
import 'aos/dist/aos.css';
import $ from 'jquery';

import { FaHome, FaUser, FaFile, FaCode, FaLaptopCode, FaBars, FaArrowUp, FaToolbox } from 'react-icons/fa';  /* FONT AWESOME ICONS */
import * as Scroll from 'react-scroll';

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

  /* Init AOS */
  const aos_init = () => {
    AOS.init({
        duration: 1000,
        once: true
    });
    AOS.refresh();
  }
  aos_init();

  // React Scroll
  let Link = Scroll.Link;
  let scroll = Scroll.animateScroll;

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div className="App">
      
      <LanguageSelect />
      
      <button type="button" className="mobile-nav-toggle d-lg-none" onClick={() =>  $('body').toggleClass('mobile-nav-active')}><FaBars /></button>
      
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul>
            <Link
              activeClass="active"
              to="profile"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <FaHome />
              <span>{t("nav_home")}</span>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <FaUser />
              <span>{t("nav_profile")}</span>
            </Link>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <FaCode />
              <span>{t("nav_skills")}</span>
            </Link>

            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <FaFile />
              <span>{t("nav_parcours")}</span>
            </Link>

            <Link
              to="tools"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <FaToolbox />
              <span>{t("nav_tools")}</span>
            </Link>

            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <FaLaptopCode />
              <span>{t("nav_portfolio")}</span>
            </Link>
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
      <a href="/#" onClick={scrollToTop} className="back-to-top"><FaArrowUp /></a>

    </div>
  );
}

export default App;
