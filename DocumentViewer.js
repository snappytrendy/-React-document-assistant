// src/components/DocumentViewer.js
import React, { useState } from 'react'; // Import React and useState hook for managing state

// DocumentViewer component receives originalText, improvedText, and onImprove function as props
const DocumentViewer = ({ originalText, improvedText, onImprove }) => {
  // State to manage loading state and notification messages
  const [loading, setLoading] = useState(false); // Initially not loading
  const [notification, setNotification] = useState(''); // Initially no notification

  // Function to handle the improve document action
  const handleImproveDocument = () => {
    setLoading(true); // Set loading to true when the improvement starts
    setNotification('Improving document, please wait...'); // Set notification message

    // Call the improve function passed as a prop with original text as argument
    onImprove(originalText)
      .then(() => {
        // If the improvement is successful
        setLoading(false); // Stop loading
        setNotification('Document improved successfully!'); // Set success notification
      })
      .catch(() => {
        // If there is an error during improvement
        setLoading(false); // Stop loading
        setNotification('Error improving document. Please try again.'); // Set error notification
      });

    // Automatically clear the notification after a few seconds
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="document-container"> {/* Container for document viewing */}
      <div className="pane"> {/* Pane for original content */}
        <h2>Original Content</h2> {/* Header for original content section */}
        <p>{originalText}</p> {/* Display the original text */}
      </div>
      <div className="pane"> {/* Pane for improved content */}
        <h2>Enhanced Content</h2> {/* Header for enhanced content section */}
        <p>{improvedText || 'The document will appear here once improved.'}</p> {/* Display improved text or placeholder */}
      </div>
      <button onClick={handleImproveDocument}>Improve Document</button> {/* Button to improve the document */}
      {loading && <div className="loader">Loading...</div>} {/* Loader displayed while improving */}
      {notification && <div className="notification">{notification}</div>} {/* Notification displayed based on actions */}
    </div>
  );
};

export default DocumentViewer; // Export the DocumentViewer component for use in other files
