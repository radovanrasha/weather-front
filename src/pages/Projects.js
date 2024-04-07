import portfolio from "../assets/portfolio.png";
import notesapp from "../assets/notesapp.png";

const Projects = () => {
  return (
    <div className="container">
      <p className="header-div"> &lt;Projects/&gt;</p>
      <div class="container">
        <div class="profile-wrapper">
          <div class="profile">
            <div class="profile-image">
              <img src={portfolio} alt="Profile" />
            </div>
            <ul class="social-icons">
              <li>
                <a
                  href="https://radovanrasha.onrender.com"
                  title="Portfolio Website"
                >
                  <svg
                    style={{ color: "black" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7,6 L3,12 L7,18"></path>
                    <path d="M10,18 L14,6"></path>
                    <path d="M17,6 L21,12 L17,18"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div class="profile-name">
              <h2>Portfolio website</h2>
              <div class="profile-bio">
                This is my personal portfolio website. On this site i presented
                myself and all of my skills.
              </div>
            </div>
          </div>
        </div>

        <div class="profile-wrapper">
          <div class="profile">
            <div class="profile-image">
              <img src={notesapp} alt="Profile" />
            </div>
            <ul class="social-icons">
              <li>
                <a
                  href="https://notes-app-radovanrasha.onrender.com"
                  title="NotesAPP"
                >
                  <svg
                    style={{ color: "black" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19ZM20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H10V12.0111L12.395 12.0112L14.0001 9.86419L15.6051 12.0112H18.0001L18 4H19C19.5523 4 20 4.44772 20 5V19ZM16 4H12V9.33585L14.0001 6.66046L16 9.33571V4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div class="profile-name">
              <h2>Notes website</h2>
              <div class="profile-bio">
                This is fullstack project that I made using Node.js, Express.js,
                MongoDB, React and ANT Design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
