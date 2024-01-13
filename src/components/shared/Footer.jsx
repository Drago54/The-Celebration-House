import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-container flex-column-center">
        <p className="footer-header">
          Made with <span className="keyword">{`</>`}  </span>by <a href="">The Celebration House</a>
        </p>
        <ul>
          <li className="footer-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin-in"]}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
        <p className="copywright">© 2024 | The Celebration House</p>
      </footer>
    </>
  );
}

export { Footer };
