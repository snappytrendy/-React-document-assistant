// src/components/SuggestionsPanel.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SuggestionsPanel from './SuggestionsPanel';

test('renders suggestions and handles accept/reject', () => {
    const suggestions = ["Check for grammar", "Consider summarizing"];
    const onAccept = jest.fn();
    const onReject = jest.fn();

    const { getByText } = render(
        <SuggestionsPanel 
            suggestions={suggestions} 
            onAccept={onAccept} 
            onReject={onReject} 
        />
    );

    // Check if suggestions are displayed
    suggestions.forEach(suggestion => {
        expect(getByText(suggestion)).toBeInTheDocument();
    });

    // Simulate accepting the first suggestion
    fireEvent.click(getByText('Accept'));
    expect(onAccept).toHaveBeenCalled();

    // Simulate rejecting the first suggestion
    fireEvent.click(getByText('Reject'));
    expect(onReject).toHaveBeenCalled();
});
