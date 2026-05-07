import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EventsPage from "./pages/Events/Events";
import SavedEventsPage from "./pages/SavedEvents/SavedEvents";
import LoginPage from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

// App is just the router — Layout wraps the pages that need a sidebar
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page — no sidebar */}
        <Route path="/login" element={<LoginPage />} />

        {/* Pages with the sidebar layout */}
        <Route element={<Layout />}>
          {/* Main events page */}
          <Route path="/" element={<EventsPage />} />

          {/* Saved / interested events */}
          <Route path="/saved" element={<SavedEventsPage />} />

          {/* Placeholder redirects — add real pages when ready */}
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/opportunities" element={<Navigate to="/" replace />} />
          <Route path="/profile" element={<Navigate to="/" replace />} />
        </Route>

        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
