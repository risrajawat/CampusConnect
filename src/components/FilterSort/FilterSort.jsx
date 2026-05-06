import "./FilterSort.css";

function FilterSort({
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}) {

  // Categories
  const categories = [
    "All",
    "Hackathon",
    "Workshop",
    "Seminar",
    "Guest Lecture",
    "College Event",
  ];

  return (
    <div className="filter-sort">

      {/* Category Buttons */}
      <div className="categories">

        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}

      </div>

      {/* Sort Dropdown */}
      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="Upcoming">Upcoming</option>
        <option value="Latest">Latest</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

    </div>
  );
}

export default FilterSort;