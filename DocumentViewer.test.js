// src/components/DocumentViewer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import DocumentViewer from './DocumentViewer';

test('renders original and improved text', () => {
    const { getByText } = render(
        <DocumentViewer originalText="Original" improvedText="Improved" />
    );
    
    expect(getByText(/original/i)).toBeInTheDocument();
    expect(getByText(/improved/i)).toBeInTheDocument();
});
