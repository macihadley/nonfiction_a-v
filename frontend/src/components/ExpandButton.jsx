import React from "react";
import { useState } from "react";
import "../ExpandButton.css";

function ExpandButton({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`expand-container ${isExpanded ? "fullscreen" : ""}`}>
      <h2>{title}</h2>
      <button onClick={toggleExpand}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      {isExpanded && <div className="expanded-content">{children}</div>}
    </div>
  );
}

export default ExpandButton;
