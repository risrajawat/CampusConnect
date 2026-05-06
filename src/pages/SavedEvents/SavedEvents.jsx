import Navbar from "../../components/Navbar/Navbar";
import EventCard from "../../components/Card/Card";

import events from "../../data/events";

import "./SavedEvents.css";

function SavedEvents() {

  // Get saved event ids from localStorage
  const savedIds =
    JSON.parse(localStorage.getItem("savedEvents")) || [];

  // Get only saved events
  const savedEvents = events.filter((event) =>
    savedIds.includes(event.id)
  );

  // Remove saved event
  const removeEvent = (id) => {

    const updatedIds = savedIds.filter(
      (eventId) => eventId !== id
    );

    localStorage.setItem(
      "savedEvents",
      JSON.stringify(updatedIds)
    );

    // Refresh page
    window.location.reload();
  };

  return (
    <div className="saved-page">

      <Navbar />

      <div className="saved-header">
        <h1>My Interested Events</h1>
        <p>Your saved college events</p>
      </div>

      {/* If no saved events */}
      {savedEvents.length === 0 ? (

        <div className="empty-state">
          <h2>No Saved Events</h2>
          <p>Save events from the Events page.</p>
        </div>

      ) : (

        <div className="saved-grid">

          {savedEvents.map((event) => (

            <EventCard
              key={event.id}
              event={event}
              isInterested={true}
              onToggleInterest={removeEvent}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default SavedEvents;