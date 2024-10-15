// src/components/SuggestionsPanel.js
import React from 'react'; // Import React for component creation

// SuggestionsPanel component receives suggestions, onAccept, and onReject functions as props
function SuggestionsPanel({ suggestions, onAccept, onReject }) {
    return (
        <div className="suggestions-container"> {/* Container for suggestions */}
            <h3>Suggestions</h3> {/* Header for suggestions section */}
            <ul> {/* Unordered list to display suggestions */}
                {suggestions.length > 0 ? ( // Check if there are any suggestions
                    suggestions.map((suggestion, index) => ( // Iterate through each suggestion
                        <li key={index}> {/* List item for each suggestion */}
                            <input
                                type="text" // Input field to display the suggestion
                                value={suggestion} // Set the input value to the suggestion text
                                readOnly // Make the input read-only to prevent editing
                            />
                            <button onClick={() => onAccept(suggestion)}>Accept</button> {/* Button to accept the suggestion */}
                            <button onClick={() => onReject(suggestion)}>Reject</button> {/* Button to reject the suggestion */}
                        </li>
                    ))
                ) : ( // If no suggestions are available
                    <p>No suggestions available.</p> // Message indicating no suggestions
                )}
            </ul>
        </div>
    );
}

export default SuggestionsPanel; // Export the SuggestionsPanel component for use in other files
