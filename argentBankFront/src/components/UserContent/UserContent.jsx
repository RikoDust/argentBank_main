// USER-CONTENT_COMPONENT

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./UserContent.scss";




const UserContent = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout());
      navigate("/sign-in"); // Redirection après déconnexion
    };

    return (
        <div className="bg-dark">
            <div className="header">
            <h1>Welcome back<br />{user?.email || "User"}!</h1> 
                <button className="edit-button">Edit Name</button>
            </div>


            <div> 
            <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>


            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </div>
    );
  };
  



  export default UserContent;
