// src/App.js
import React, { useState } from 'react'; // Import React and useState hook for state management
import './App.css'; // Import CSS for styling
import UploadDocument from './components/UploadDocument'; // Import UploadDocument component for file upload
import DocumentViewer from './components/DocumentViewer'; // Import DocumentViewer component for displaying documents
import SuggestionsPanel from './components/SuggestionsPanel'; // Import SuggestionsPanel component for managing suggestions

function App() {
    // State to hold the original text from the uploaded document
    const [originalText, setOriginalText] = useState(''); 
    // State to hold the improved text after suggestions are applied
    const [improvedText, setImprovedText] = useState(''); 
    // State to hold the list of suggestions generated from the text analysis
    const [suggestions, setSuggestions] = useState([]); 
    // State to control the loading indicator
    const [isLoading, setIsLoading] = useState(false); 
    // State to hold notification messages to inform users
    const [notification, setNotification] = useState(''); 
    // State to hold the name of the uploaded file
    const [fileName, setFileName] = useState('No file chosen'); 

    // Handle file changes when a new document is uploaded
    const handleFileChange = (fileContent, name) => {
        // Set the original text to the content of the uploaded file
        setOriginalText(fileContent); 
        // Set the improved text to the original text initially
        setImprovedText(fileContent); 
        // Set the file name for display purposes
        setFileName(name); 
        // Generate suggestions based on the original text
        generateSuggestions(fileContent); 
    };

    // Function to generate suggestions based on the content of the document
    const generateSuggestions = (text) => {
        const newSuggestions = []; // Array to hold new suggestions
        // If the text length exceeds 150 characters, suggest summarization
        if (text.length > 150) {
            newSuggestions.push("Consider summarizing lengthy paragraphs.");
        }
        // Suggest checking for grammatical errors if the text contains "grammar"
        if (text.includes("grammar")) {
            newSuggestions.push("Check for grammatical errors.");
        }
        // Suggest reducing passive voice if the text contains "passive"
        if (text.includes("passive")) {
            newSuggestions.push("Try to reduce the use of passive voice.");
        }
        // Suggest simplifying wordy sentences if the text contains "wordy"
        if (text.includes("wordy")) {
            newSuggestions.push("Simplify wordy sentences for better clarity.");
        }
        // Update the suggestions state with the new suggestions
        setSuggestions(newSuggestions); 
    };

    // Handle accepting a suggestion from the suggestions panel
    const handleAcceptSuggestion = (suggestion) => {
        setIsLoading(true); // Start loading state
        setTimeout(() => {
            let updatedText = improvedText; // Create a copy of the current improved text

            // Logic to apply the suggestion to the improved text
            // Modify the improved text based on the accepted suggestion
            if (suggestion === "Check for grammatical errors.") {
                updatedText = updatedText.replace(/grammar mistakes/, 'grammatical mistakes');
            } else if (suggestion === "Try to reduce the use of passive voice.") {
                updatedText = updatedText.replace(/passive voice/, 'active voice');
            } else if (suggestion === "Simplify wordy sentences for better clarity.") {
                updatedText = updatedText.replace(/even though it could be simpler/, 'even though it could be clearer');
            }

            // Update the improved text with the applied suggestion
            setImprovedText(updatedText); 
            // Remove the accepted suggestion from the list
            setSuggestions(prev => prev.filter(s => s !== suggestion)); 
            setIsLoading(false); // Stop loading state
            // Set a notification message to inform the user of successful improvement
            setNotification('Improvement applied successfully!'); 

            // Automatically clear the notification after a few seconds
            setTimeout(() => setNotification(''), 3000);
        }, 1000); // Simulate a delay of 1 second for the loading process
    };

    // Handle rejecting a suggestion from the suggestions panel
    const handleRejectSuggestion = (suggestion) => {
        // Remove the rejected suggestion from the list
        setSuggestions(prev => prev.filter(s => s !== suggestion)); 
    };

    return (
        <div className="App"> {/* Main application container */}
            <header className="App-header"> {/* Header section of the app */}
                <h1>AI Document Assistant</h1> {/* Title of the application */}
                <UploadDocument onFileChange={handleFileChange} fileName={fileName} /> {/* Component for uploading documents */}
                
                <div className="document-container"> {/* Container for document viewer */}
                    <DocumentViewer originalText={originalText} improvedText={improvedText} /> {/* Component for viewing documents */}
                </div>

                {/* Loader indicator for processing */}
                {isLoading && <div className="loader">Processing...</div>}

                {/* Notification message to inform users */}
                {notification && <div className="notification">{notification}</div>}

                {/* Suggestions panel for displaying and managing suggestions */}
                <SuggestionsPanel
                    suggestions={suggestions}
                    onAccept={handleAcceptSuggestion}
                    onReject={handleRejectSuggestion}
                />
            </header>
        </div>
    );
}

export default App; // Export the App component for use in other files
