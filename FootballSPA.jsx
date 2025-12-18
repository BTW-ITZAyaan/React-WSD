import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function FootballSPA() {
  // Form State
  const [formData, setFormData] = useState({
    playerName: "",
    jerseyNumber: "",
    position: "Forward",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Player Registered: ${formData.playerName} (No. ${formData.jerseyNumber})`);
    // Reset form
    setFormData({ playerName: "", jerseyNumber: "", position: "Forward" });
  };

  return (
    <BrowserRouter>
      <div className="container" style={{ fontFamily: "Arial, sans-serif" }}>
        {/* TOP NAVIGATION */}
        <nav style={navStyle}>
          <h2 style={{ margin: 0 }}>Football MS</h2>
          <ol style={navListStyle}>
            <li><Link smooth to="#dashboard" style={navLinkStyle}>Dashboard</Link></li>
            <li><Link smooth to="#players" style={navLinkStyle}>Players</Link></li>
            <li><Link smooth to="#register" style={navLinkStyle}>Register</Link></li>
            <li><Link smooth to="#matches" style={navLinkStyle}>Matches</Link></li>
            <li><Link smooth to="#standings" style={navLinkStyle}>Standings</Link></li>
          </ol>
        </nav>

        {/* DASHBOARD */}
        <section id="dashboard" style={sectionStyle}>
          <h1>Team Dashboard</h1>
          <p>Overview of the club including upcoming fixtures and results.</p>
          <ul>
            <li>Total registered players: 25</li>
            <li>Next match: Tigers FC vs Warriors FC</li>
          </ul>
        </section>

        {/* PLAYER LIST */}
        <section id="players" style={sectionStyle}>
          <h1>Player Management</h1>
          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th>No.</th>
                <th>Name</th>
                <th>Position</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Rahul Kumar</td><td>Goalkeeper</td><td>Active</td></tr>
              <tr><td>7</td><td>Arjun Singh</td><td>Forward</td><td>Injured</td></tr>
            </tbody>
          </table>
        </section>

        {/* NEW FORM SECTION */}
        <section id="register" style={sectionStyle}>
          <div className="cover">
            <h1>Register <span>New Player</span></h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="text"
                name="playerName"
                placeholder="Player Full Name"
                value={formData.playerName}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="jerseyNumber"
                placeholder="Jersey Number"
                value={formData.jerseyNumber}
                onChange={handleChange}
                required
              />
              <select 
                name="position" 
                value={formData.position} 
                onChange={handleChange}
                style={{ padding: "8px", borderRadius: "4px" }}
              >
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Defender">Defender</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Forward">Forward</option>
              </select>
              <button type="submit">Add Player to Squad</button>
            </form>
          </div>
        </section>

        {/* MATCHES */}
        <section id="matches" style={sectionStyle}>
          <h1>Match Schedule</h1>
          <ul>
            <li>Matchday 1: Tigers FC vs Warriors FC – 21 Dec 2025</li>
            <li>Matchday 2: Titans FC vs Tigers FC – 28 Dec 2025</li>
          </ul>
        </section>

        {/* STANDINGS */}
        <section id="standings" style={sectionStyle}>
          <h1>League Standings</h1>
          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th>Pos</th>
                <th>Club</th>
                <th>Played</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Tigers FC</td><td>5</td><td>12</td></tr>
              <tr><td>2</td><td>Warriors FC</td><td>5</td><td>10</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </BrowserRouter>
  );
}

/* STYLES */
const sectionStyle = { padding: "100px 24px 40px", borderBottom: "1px solid #ddd" };
const navStyle = { position: "fixed", top: 0, left: 0, right: 0, backgroundColor: "#1b263b", color: "white", padding: "15px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1000 };
const navListStyle = { display: "flex", gap: "15px", listStyle: "none", margin: 0, padding: 0 };
const navLinkStyle = { color: "white", textDecoration: "none", fontWeight: "bold" };
const tableStyle = { width: "100%", borderCollapse: "collapse", marginTop: "10px", textAlign: "left" };