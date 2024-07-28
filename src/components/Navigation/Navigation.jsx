import "./navigation.css";
import { Link} from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import Burger from "./Burger";

const Navigation = () => {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Burger />
       
      {/* <div className="links">
        <span className="line"></span>
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "#d0cdcd" }} to="/">
              <span style={{ color: "#fff" }}>00</span> Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#d0cdcd" }}
              to="/destination"
            >
              <span style={{ color: "#fff" }}>01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#d0cdcd" }}
              to="/crew"
            >
              <span style={{ color: "#fff" }}>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#d0cdcd" }}
              to="/technology"
            >
              <span style={{ color: "#fff" }}>03</span> Technology
            </Link>
          </li>
        </ul>
      </div> */}
     
    </nav>
  );
};

export default Navigation;
