import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import events from "../../data/events";

import "./Profile.css";

function Profile() {

  // User Data
  const [user, setUser] = useState({
    name: "Rishabh",
    email: "rishabh@gmail.com",
    college: "Rishihood University",
    branch: "Computer Science",
  });

  // Saved Events
  const savedIds =
    JSON.parse(localStorage.getItem("savedEvents")) || [];

  const savedEvents = events.filter((event) =>
    savedIds.includes(event.id)
  );

  // Edit State
  const [isEditing, setIsEditing] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  return (
    <div className="profile-page">

      <Navbar />

      {/* Header */}
      <div className="profile-header">

        <h1>My Profile</h1>

        <p>
          Manage your profile details
        </p>

      </div>

      {/* Profile Card */}
      <div className="profile-card">

        <div className="profile-top">

          <div className="profile-image">
            {user.name[0]}
          </div>

          <div>

            <h2>{user.name}</h2>

            <p>{user.email}</p>

          </div>

        </div>

        {/* Details */}
        <div className="profile-details">

          <div className="detail-box">
            <h4>College</h4>
            <p>{user.college}</p>
          </div>

          <div className="detail-box">
            <h4>Branch</h4>
            <p>{user.branch}</p>
          </div>

          <div className="detail-box">
            <h4>Saved Events</h4>
            <p>{savedEvents.length}</p>
          </div>

        </div>

        {/* Edit Button */}
        <button
          className="edit-btn"
          onClick={() =>
            setIsEditing(!isEditing)
          }
        >
          {isEditing ? "Close" : "Edit Profile"}
        </button>

        {/* Edit Form */}
        {isEditing && (

          <div className="edit-form">

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter name"
            />

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
            />

            <input
              type="text"
              name="college"
              value={user.college}
              onChange={handleChange}
              placeholder="Enter college"
            />

            <input
              type="text"
              name="branch"
              value={user.branch}
              onChange={handleChange}
              placeholder="Enter branch"
            />

          </div>

        )}

      </div>

    </div>
  );
}

export default Profile;