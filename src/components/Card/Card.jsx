import { useNavigate } from "react-router-dom";

import "./Card.css";

function EventCard({
  event,
  isInterested,
  onToggleInterest,
}) {

  const navigate = useNavigate();

  // Open Details Page
  const viewDetails = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="card">

      {/* Image */}
      <img
        src={event.image}
        alt={event.title}
        className="card-image"
      />

      {/* Content */}
      <div className="card-content">

        {/* Category */}
        <span className="card-category">
          {event.category}
        </span>

        {/* Title */}
        <h3>{event.title}</h3>

        {/* Date */}
        <p>
          📅 {event.date}
        </p>

        {/* Venue */}
        <p>
          📍 {event.venue}
        </p>

        {/* Description */}
        <p className="description">
          {event.description}
        </p>

        {/* Buttons */}
        <div className="card-buttons">

          <button
            className="details-btn"
            onClick={viewDetails}
          >
            View Details
          </button>

          <button
            className={
              isInterested
                ? "interest-btn active"
                : "interest-btn"
            }
            onClick={() =>
              onToggleInterest(event.id)
            }
          >
            {isInterested ? "❤️" : "🤍"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default EventCard;