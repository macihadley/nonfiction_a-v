import React, { useState } from "react";
import "../ExpandButton.css";

function ExpandButton({ title, filename }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const base = import.meta.env.BASE_URL || "";
  const fileUrl = filename ? `${base}sentiment_html/${filename}` : null;

  {
    /* Expand/Collapse button */
  }
  return (
    // Apply both 'expand-container' and 'fullscreen' class if expanded
    <div className={`expand-container ${isExpanded ? "fullscreen" : ""}`}>
      <h2>{title}</h2>
      <button onClick={toggleExpand}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>

      {/* Only show iframe if expanded */}
      {isExpanded && (
        <div className="expanded-content">
          {fileUrl ? (
            <iframe
              src={fileUrl}
              title={title}
              width="100%"
              height="100%"
              style={{
                border: "none",
              }}
              className="content-iframe"
            />
          ) : (
            // If no HTML file found, print "No associated HTML file"
            <p style={{ color: "red", textAlign: "center" }}>
              No associated HTML file.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ExpandButton;
