// USER_PAGE


import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserContent from "../components/UserContent/UserContent";



const User = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in"); // Redirection si non connecté
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <UserContent /> : null;
};




export default User;
