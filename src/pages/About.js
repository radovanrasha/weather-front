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
            I am a full-stack JavaScript developer from Serbia born on May 20,
            1999. I completed my secondary education in economics and commerce.
            At the University of Economics in Subotica, I pursued a course in
            Business Informatics, which centers on IT. My culminating thesis and
            project was focused on Node.js.
          </p>
        </div>
      </div>
      <div className="about-row">
        <div class="text-content">
          <p className="rightslide" style={{ animationDelay: `${2 * 0.3}s` }}>
            My primary experience lies in backend development using Node.js,
            Express, and MongoDB, as well as frontend development with React and
            AntD. Additionally, I possess a basic knowledge of SQL, TypeScript,
            MUI and similar technologies.
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
            I bring over a year of professional experience in web development,
            complemented by a university degree. In addition, I have enhanced my
            skills through various courses, participated in a coding
            competition, and being involved in build of many personal projects.
          </p>
        </div>
      </div>
      <div className="about-row">
        <div class="text-content">
          <p className="rightslide" style={{ animationDelay: `${4 * 0.3}s` }}>
            I am eager to further expand my expertise in these and similar areas
            through continuous learning.
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
