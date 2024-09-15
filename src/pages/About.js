// import "../styles/About.css";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

const About = () => {
  return (
    <div className="about-container">
      <p className="header-div"> &lt;About me/&gt;</p>
      <div className="about-row">
        <img
          className="leftslide"
          style={{ animationDelay: `${1 * 0.3}s` }}
          src={about1}
          alt="Profile"
        />
        <div class="text-content">
          <p className="leftslide" style={{ animationDelay: `${1 * 0.3}s` }}>
            I am a full-stack JavaScript developer with over two years of
            professional experience, based in Serbia. My journey began with a
            solid foundation in economics and commerce during my secondary
            education, followed by a specialized course in Business Informatics
            at the University of Economics in Subotica, where I focused my
            thesis and project work on Node.js.
          </p>
        </div>
      </div>
      <div className="about-row">
        <div class="text-content">
          <p className="rightslide" style={{ animationDelay: `${2 * 0.3}s` }}>
            My expertise is primarily in backend development using Node.js,
            Express, and MongoDB, along with frontend development skills as
            React and Ant Design. I also have foundational knowledge of NestJS,
            VPS Linux Servers, Pm2, Nginx, SQL, TypeScript and related
            technologies.
          </p>
        </div>
        <img
          className="rightslide"
          style={{ animationDelay: `${2 * 0.3}s` }}
          src={about2}
          alt="Profile"
        />
      </div>
      <div className="about-row">
        <img
          className="leftslide"
          style={{ animationDelay: `${3 * 0.3}s` }}
          src={about3}
          alt="Profile"
        />
        <div class="text-content">
          <p className="leftslide" style={{ animationDelay: `${3 * 0.3}s` }}>
            Throughout my career, I have continually enhanced my skills through
            various courses, participated in coding competitions, and
            contributed to numerous personal projects.
          </p>
        </div>
      </div>
      <div className="about-row">
        <div class="text-content">
          <p className="rightslide" style={{ animationDelay: `${4 * 0.3}s` }}>
            I am passionate about expanding my knowledge and expertise in these
            and similar areas through continuous learning and hands-on
            experience.
          </p>
        </div>
        <img
          className="rightslide"
          style={{ animationDelay: `${4 * 0.3}s` }}
          src={about4}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default About;
