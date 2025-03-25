import React from "react";
import "./App.css";
import ExpandButton from "./components/ExpandButton.jsx";
import sections from "./data.js";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Input remains unchanged */}
      <div id="search-container" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search nonfiction entries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Always render the container to maintain consistent width */}
      <div className="nonfiction-container">
        {filteredSections.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "20px" }}>
            Sorry, no matching titles!
          </p>
        ) : (
          filteredSections.map((section, index) => (
            <ExpandButton key={index} title={section.title}>
              <p>{section.content}</p>
            </ExpandButton>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
