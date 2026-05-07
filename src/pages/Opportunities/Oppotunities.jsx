import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";

import "./Opportunities.css";

// Opportunities Data
const opportunities = [
  {
    id: 1,
    title: "Frontend Work",
    company: "Faculty of Engineering",
    type: "Internship",
    location: "Remote",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Faculty of Design",
    type: "Internship",
    location: "Delhi",
  },
  {
    id: 3,
    title: "Working for college fest",
    company: "Club head",
    type: "Club",
    location: "Campus",
  },
];

function Opportunities() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter Opportunities
  const filteredData = opportunities.filter((item) => {

    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      item.type === filter;

    return matchesSearch && matchesFilter;

  });

  return (
    <div className="opportunities-page">

      <Navbar />

      {/* Header */}
      <div className="opportunities-header">

        <h1>Opportunities</h1>

        <p>
          Find internships and clubs
        </p>

      </div>

      {/* Search & Filter */}
      <div className="opportunities-controls">

        <input
          type="text"
          placeholder="Search opportunities..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="All">All</option>
          <option value="Internship">
            Internship
          </option>
          <option value="Club">
            Club
          </option>
        </select>

      </div>

      {/* Cards */}
      <div className="opportunities-grid">

        {filteredData.map((item) => (

          <div
            className="opportunity-card"
            key={item.id}
          >

            <h2>{item.title}</h2>

            <p>🏢 {item.company}</p>

            <p>📍 {item.location}</p>

            <span className="type-badge">
              {item.type}
            </span>

            <button>
              Apply Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Opportunities;