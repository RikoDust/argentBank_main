// SIGN-IN-CONTENT_COMPONENT


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, fetchUserProfile } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";

import "./SignInContent.scss";



const SignInContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // État pour "Remember me"
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch avec "rememberMe"
    const result = await dispatch(loginUser({ email, password, rememberMe }));

    if (result.meta.requestStatus === "fulfilled") {
      await dispatch(fetchUserProfile()); // Récupère les infos utilisateur
      navigate("/user"); // Redirection vers l'espace utilisateur
    }
  };

  return (
    <div className="bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-remember">
            <input 
              type="checkbox" 
              id="remember-me" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </section>
    </div>
  );
};

export default SignInContent;
