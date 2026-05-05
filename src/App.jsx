import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout (Sidebar + main area)
import Layout from "./components/Layout/Layout";

// Pages
import Events from "./pages/Events/Events";
import Login from "./pages/Login/Login";
// (optional later)
// import Opportunities from "./pages/Opportunities/Opportunities";
// import Saved from "./pages/Saved/Saved";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages WITH sidebar/layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />

        {/* Add more pages same pattern */}
        {/* 
        <Route
          path="/opportunities"
          element={
            <Layout>
              <Opportunities />
            </Layout>
          }
        />
        */}

        {/* Page WITHOUT sidebar (like login) */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;