import "./card.css";

function Card({ event }) {
  return (
    <div className="card">
      <img src={event.image} alt={event.title} />

      <div className="card-body">
        <span className="tag">{event.category}</span>

        <h3>{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.venue}</p>

        <button>View Details →</button>
      </div>
    </div>
  );
}

export default Card;