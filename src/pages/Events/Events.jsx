import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterSort from "../../components/FilterSort/FilterSort";
import EventCard from "../../components/Card/Card";
import events from "../../data/events";

import "./events.css";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Upcoming");

  // Get saved ids
  const savedIds = JSON.parse(localStorage.getItem("savedEvents")) || [];

  // Save / Remove event
  const toggleInterest = (id) => {
    let updatedIds;
    if (savedIds.includes(id)) {
      updatedIds = savedIds.filter((eventId) => eventId !== id);
    } else {
      updatedIds = [...savedIds, id];
    }
    localStorage.setItem("savedEvents", JSON.stringify(updatedIds));
    window.location.reload();
  };

  // Filter Events
  let filteredEvents = events.filter((event) => {
    // Search
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    // Category
    const matchesCategory = category === "All" || event.category === category;
    return matchesSearch && matchesCategory;
  });

  // Sort Events
  if (sortBy === "A-Z") {
    filteredEvents.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "Z-A") {
    filteredEvents.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="events-page">
      <Navbar />

      {/* Header */}
      <div className="events-header">
        <h1>Campus Events</h1>
        <p>Discover exciting college events</p>
      </div>

      {/* Search + Filter */}
      <div className="top-section">
        <SearchBar value={search} onChange={setSearch} />
        <FilterSort
          activeCategory={category}
          onCategoryChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {/* Event Cards */}
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isInterested={savedIds.includes(event.id)}
            onToggleInterest={toggleInterest}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;