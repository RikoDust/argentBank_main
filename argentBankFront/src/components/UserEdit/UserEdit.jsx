// USER-EDIT_COMPONENT




import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../Redux/userEditSlice";
import { toggleEditMode } from "../../Redux/userEditSlice";
import "./UserEdit.scss";

const UserEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [newUserName, setNewUserName] = useState(user?.userName || "");

  const handleSave = () => {
    if (newUserName.trim()) {
      dispatch(updateUserName(newUserName));
    }
  };

  return (
    <div className="user-edit">
      <h2>Edit user info</h2>
      <form>
        <div className="input-group">
          <label>User name: </label>
          <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>First Name: </label>
          <input type="text" value={user?.firstName || ""} disabled className="disabled" />
        </div>
        <div className="input-group">
          <label>Last Name: </label>
          <input type="text" value={user?.lastName || ""} disabled className="disabled" />
        </div>
        <div className="buttons">
          <button type="button" className="save" onClick={handleSave}>Save</button>
          <button type="button" className="cancel" onClick={() => dispatch(toggleEditMode())}>Cancel</button>
        </div>
      </form>
    </div>
  );
};



export default UserEdit;



