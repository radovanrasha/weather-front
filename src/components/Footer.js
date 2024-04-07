import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <p> &copy; 2023 radovanrasha</p>
      <div>
        <a href="mailto:ivanovicradovan18@gmail.com">
          <img className="footerIcon" src={gmail} alt="Profile" />
        </a>
        <a href="https://www.linkedin.com/in/radovanrasha/">
          <img className="footerIcon" src={linkedin} alt="Profile" />
        </a>
      </div>

      <br />
    </div>
  );
};

export default Footer;
