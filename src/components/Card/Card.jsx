import "./Card.css";

function Card({ event, isInterested, onToggleInterest }) {
  return (
    <div className="card">

      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="card-image"
      />

      {/* Card Content */}
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

          <button className="details-btn">
            View Details
          </button>

          <button
            className={isInterested ? "interest-btn active" : "interest-btn"}
            onClick={() => onToggleInterest(event.id)}
          >
            {isInterested ? "❤️" : "🤍"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Card;