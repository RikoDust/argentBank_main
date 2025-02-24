// PRIVATE_ROUTE


import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";



const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/sign-in" />;
};



// Validation des props
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };



export default PrivateRoute;
