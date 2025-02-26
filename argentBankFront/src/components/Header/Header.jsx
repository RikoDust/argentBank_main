// HEADER_COMPONENT


import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userSlice"; // Action de déconnexion



const Header = () => {
  const dispatch = useDispatch();
  
  // Récupère les infos de connexion depuis Redux
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    dispatch(logout());
  };



  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src="src/assets/img/argentBankLogo.webp" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          // Si l'utilisateur est connecté, affiche le bouton Sign Out
          <button className="main-nav-item" onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <i className="fa-solid fa-right-from-bracket"></i> Sign Out
          </button>
        ) : (
          // Sinon, affiche le bouton Sign In
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};






export default Header;
