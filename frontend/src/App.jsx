import React from "react";
import "./App.css";
import ExpandButton from "./components/ExpandButton.jsx";
import sections from "./data.js";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the sections based on the search input
  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search input field */}
      <div id="search-container" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search nonfiction entries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "5px",
            border: "2px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      {/* {/* Nonfiction content container */}
      <div className="nonfiction-container">
        {filteredSections.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "20px" }}>
            Sorry, no matching titles!
          </p>
        ) : (
          // Map each filtered section to an ExpandButton
          filteredSections.map((section, index) => (
            <ExpandButton
              key={index}
              title={section.title}
              filename={section.filename}
            ></ExpandButton>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
