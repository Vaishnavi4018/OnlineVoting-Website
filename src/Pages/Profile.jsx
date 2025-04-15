import React, { useState, useEffect } from "react";
import "./Profile.css"; // Importing the CSS file

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    aadhar: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (savedUser) {
      setUserDetails(savedUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h1>Your Account</h1>

        <div className="section-title">Profile Details</div>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="input-group">
          <label>Aadhar Card Number</label>
          <input
            type="text"
            name="aadhar"
            value={userDetails.aadhar}
            onChange={handleChange}
            disabled={!isEditing}
            maxLength="12"
            pattern="\d{12}"
            title="Aadhar must be a 12-digit number"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="button-group">
          {isEditing ? (
            <button onClick={handleSaveClick} className="save-button">
              Save Changes
            </button>
          ) : (
            <button onClick={handleEditClick} className="edit-button">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

