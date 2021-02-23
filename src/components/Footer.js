import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';  /* FONT AWESOME ICONS */

const Footer = () => {
    let anneeEnCours = (new Date()).getFullYear();
    return (
      <footer id="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://www.instagram.com/gaja_14/" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/gajalakshmi-pavade/" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedinIn /></a>
            <a href="https://github.com/Gaja-A" target="_blank" rel="noopener noreferrer" className="github"><FaGithub /></a>
          </div>
          <div className="copyright">
            &copy; Gaja - {anneeEnCours}
          </div>
        </div>
      </footer>
    )
}

export default Footer
