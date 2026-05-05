import events from "../../data/events";
import Card from "../../components/Card/Card";
import "./events.css"

function Events() {
  return (
    <div>
      <h1>Events</h1>

      <div className="grid">
        {events.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;