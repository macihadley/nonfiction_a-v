import React, { useState } from "react";
import "../ExpandButton.css";

function ExpandButton({ title, filename, audio }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const base = import.meta.env.BASE_URL || "";
  const fileUrl = filename ? `${base}sentiment_html/${filename}` : null;

  // Directly use the audio URL passed from the sections data
  const audioUrl = audio ? audio : null;

  // Add the console.log here to check the audio URL
  console.log("Audio URL: ", audioUrl);  // This will print the audio URL to the console

  return (
    <div className={`expand-container ${isExpanded ? "fullscreen" : ""}`}>
      <h2>{title}</h2>
      <button onClick={toggleExpand}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>

      {isExpanded && (
        <div className="expanded-content">

          {/* Show the audio player only if an audio URL exists */}
          {audioUrl ? (
            <div>
              <h3>Click play to listen while you read!</h3>
              <audio controls>
                <source src={audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ) : (
            <p style={{ color: "black", textAlign: "center" }}><b>Sorry, the audio for this is not available yet. Check back later!</b></p>
          )}

          {/* Show the file content in iframe, only if the file exists */}
          {fileUrl ? (
            <iframe
              src={fileUrl}
              title={title}
              width="100%"
              height="400px"
              style={{
                border: "none",
              }}
              className="content-iframe"
            />
          ) : (
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