import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search events..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* Clear Button */}
      {value && (
        <button onClick={() => onChange("")}>
          ✖
        </button>
      )}

    </div>
  );
}

export default SearchBar;