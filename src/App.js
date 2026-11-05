import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Research from './components/Research';
import Team from './components/Team';
import Programs from './components/Programs';
import Footer from './components/Footer';
import MissionStatement from './components/MissionStatement';
import Publications from './components/Publications';
import JoinUs from './components/JoinUs';
import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/Homepage.css";
import "./styles/Programs.css";
import "./styles/Research.css";
import "./styles/Team.css";
import Collaborationss from './components/Collaborationss'; 


const App = () => {
    // PUBLIC_URL is "" on the production site and "/preview" on the preview
    // deployment (see .github/workflows/deploy.yml), so routes work under both.
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mission-statement" element={<MissionStatement />} />
            <Route path="/research" element={<Research />} />
            <Route path="/team" element={<Team />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/collaborations" element={<Collaborationss />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
};

export default App;
