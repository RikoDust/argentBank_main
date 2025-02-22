// HEADER_COMPONENT

import "./Header.scss";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const Header = ({ isAuthenticated, username, onLogout }) => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src="src/assets/img/argentBankLogo.webp" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i> {username}
            </Link>
            <button className="main-nav-item" onClick={onLogout} style={{ background: "none", border: "none", cursor: "pointer" }}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};



// Validation des props
Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    username: PropTypes.string,
    onLogout: PropTypes.func.isRequired,
  };
  
  // Valeurs par défaut (si "username" n'est pas fourni)
  Header.defaultProps = {
    username: "",
  };



export default Header;
