// src/components/UploadDocument.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UploadDocument from './UploadDocument';

test('calls onFileChange when a file is selected', () => {
    const onFileChange = jest.fn(); // Mock function to track calls
    const { getByLabelText } = render(<UploadDocument onFileChange={onFileChange} />);

    const fileInput = getByLabelText(/upload document/i); // Get the file input element
    fireEvent.change(fileInput, {
        target: {
            files: [new File(['dummy content'], 'example.txt', { type: 'text/plain' })],
        },
    });

    expect(onFileChange).toHaveBeenCalled(); // Verify that the onFileChange function was called
});
