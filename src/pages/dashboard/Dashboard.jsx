import Navbar from "../../components/Navbar/Navbar";
import events from "../../data/events";

import "./Dashboard.css";

function Dashboard() {

  // Saved Event IDs
  const savedIds =
    JSON.parse(localStorage.getItem("savedEvents")) || [];

  // Saved Events
  const savedEvents = events.filter((event) =>
    savedIds.includes(event.id)
  );

  return (
    <div className="dashboard-page">

      <Navbar />

      {/* Heading */}
      <div className="dashboard-header">

        <h1>Dashboard</h1>

        <p>
          Welcome to CampusConnect
        </p>

      </div>

      {/* Stats */}
      <div className="stats-container">

        <div className="stat-box">
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div className="stat-box">
          <h2>{savedEvents.length}</h2>
          <p>Saved Events</p>
        </div>

        <div className="stat-box">
          <h2>
            {
              events.filter(
                (event) =>
                  event.category === "Hackathon"
              ).length
            }
          </h2>

          <p>Hackathons</p>
        </div>

      </div>

      {/* Recent Events */}
      <div className="dashboard-section">

        <h2>Recent Events</h2>

        <div className="recent-events">

          {events.slice(0, 3).map((event) => (

            <div
              className="recent-card"
              key={event.id}
            >

              <img
                src={event.image}
                alt={event.title}
              />

              <div>

                <h3>{event.title}</h3>

                <p>{event.date}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;