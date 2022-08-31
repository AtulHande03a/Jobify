import Wrapper from "../assets/wrappers/Navbar.js";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext.js";
import Logo from "./Logo.js";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => console.log("toggle-sidebar")}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => console.log("show/hide dropdown")}
          >
            <FaUserCircle />
            Atul
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => console.log("logout-user")}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
