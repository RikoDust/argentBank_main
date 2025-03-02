// USER-CONTENT_COMPONENT


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../Redux/userSlice";
import { toggleEditMode } from "../../Redux/userEditSlice";
import UserEdit from "../../components/UserEdit/UserEdit";
import "./UserContent.scss";



const UserContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isEditing = useSelector((state) => state.userEdit?.isEditing);

  // 🔄 Exécute fetchUserProfile si un token est présent
  useEffect(() => {
    if (user?.token) {
      // console.log("🔄 Appel de fetchUserProfile...");
      dispatch(fetchUserProfile());
    }
  }, [dispatch, user?.token]);





  // console.log("User dans Redux :", user); // Vérification des informations stockées

  // const userState = useSelector((state) => state.user);
  // console.log("État Redux utilisateur :", userState);


  return (
    <div className="bg-dark">
      {isEditing ? (
        <UserEdit />
      ) : (
        <div className="header">
          <h1>Welcome back<br /> {user?.firstName} {user?.lastName} !</h1>
          <button className="edit-button" onClick={() => dispatch(toggleEditMode())}>
            Edit Name
          </button>
        </div>
      )}


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
