import "./Menu.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <Router>
      <nav>
        <div className="nav">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-item"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-item"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-item"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Message"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-item"
              >
                CEO Message
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="ContactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-item"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
};

export default Menu;
