import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import events from "../../data/events";

import "./EventDetail.css";

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find Event
  const event = events.find((item) => item.id === Number(id));

  // Register State
  const [registered, setRegistered] = useState(false);

  // Saved Events
  const savedIds = JSON.parse(localStorage.getItem("savedEvents")) || [];
  const isSaved = savedIds.includes(event?.id);

  // Save Event
  const toggleSave = () => {
    let updatedIds;
    if (isSaved) {
      updatedIds = savedIds.filter((eventId) => eventId !== event.id);
    } else {
      updatedIds = [...savedIds, event.id];
    }
    localStorage.setItem("savedEvents", JSON.stringify(updatedIds));
    window.location.reload();
  };

  // Event Not Found
  if (!event) {
    return (
      <div className="not-found">
        <h2>Event Not Found</h2>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      <Navbar />

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Main Card */}
      <div className="detail-card">
        {/* Image */}
        <img src={event.image} alt={event.title} className="detail-image" />

        {/* Content */}
        <div className="detail-content">
          <span className="detail-category">{event.category}</span>
          <h1>{event.title}</h1>
          <p>📅 {event.date}</p>
          <p>📍 {event.venue}</p>
          <p>⏰ {event.time}</p>
          <p className="detail-description">{event.description}</p>

          {/* Tags */}
          <div className="detail-tags">
            {event.tags?.map((tag) => (
              <span className="detail-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="detail-buttons">
            <button className="register-btn" onClick={() => setRegistered(true)}>
              {registered ? "Registered" : "Register Now"}
            </button>
            <button
              className={isSaved ? "save-btn active" : "save-btn"}
              onClick={toggleSave}
            >
              {isSaved ? "❤️ Saved" : "🤍 Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;