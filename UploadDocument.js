// src/components/UploadDocument.js
import React, { useState } from 'react'; // Import React and useState hook for managing state

// UploadDocument component receives onFileChange function as a prop
const UploadDocument = ({ onFileChange }) => {
    const [fileName, setFileName] = useState('No file chosen'); // State to manage the file name

    // Function to handle file input changes
    const handleFileInput = (event) => {
        const file = event.target.files[0]; // Get the first file from the input
        if (file) { // Check if a file is selected
            const reader = new FileReader(); // Create a FileReader instance
            // Event handler for when the file is successfully read
            reader.onload = (e) => {
                // Call the onFileChange function passed from the parent component
                onFileChange(e.target.result, file.name); // Pass the file content and name
            };
            reader.readAsText(file); // Read the file as text (adjust if necessary for other formats)
            setFileName(file.name); // Update the file name state to reflect the chosen file
        } else {
            setFileName('No file chosen'); // Reset the file name state if no file is chosen
        }
    };

    return (
        <div className="upload-container"> {/* Container for the upload section */}
            <h2>Upload Document</h2> {/* Header for the upload section */}
            <input type="file" accept=".txt, .docx, .pdf" onChange={handleFileInput} /> {/* File input for document upload */}
            <div className="file-preview">File Name: {fileName}</div> {/* Displaying the current file name */}
            <button onClick={handleFileInput}>Improve Document</button> {/* Button to improve the document */}
        </div>
    );
};

export default UploadDocument; // Export the UploadDocument component for use in other files
