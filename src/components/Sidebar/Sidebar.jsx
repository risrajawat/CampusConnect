import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Campus Connect</h2>

      <ul>
        <li className="active">Events</li>
        <li>Opportunities</li>
        <li>My Applications</li>
        <li>Calendar</li>
        <li>Profile</li>
      </ul>
    </div>
  )
}

export default Sidebar
