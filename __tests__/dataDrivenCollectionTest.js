import React from 'react';
import { render } from '@testing-library/react';
import ArticleTemplate from '../src/templates/article-template';

// Mock the Layout component
jest.mock('../src/components/layout', () => {
  return function MockLayout({ children }) {
    return <div>{children}</div>;
  };
});

// Mock data
const mockData = {
  Drupal: {
    nodeArticle: {
      title: 'Test Article',
      author: {
        displayName: 'John Doe',
      },
      created: '9/30/2023',
      body: {
        processed: 'This is the body of the article.',
      },
      mediaImage: {
        mediaImage: {
          url: 'https://example.com/image.jpg',
        },
      },
    },
  },
};

// Test
test('renders article details correctly', () => {
  const { getByText, getByAltText } = render(<ArticleTemplate data={mockData} />);
  
  // Check if the title is rendered
  expect(getByText('Test Article')).toBeInTheDocument();
  
  // Check if the author's display name is rendered
  expect(getByText((content, element) => 
    element.tagName.toLowerCase() === 'p' && content.includes('John Doe')
  )).toBeInTheDocument();
  
  // Check if the created date is rendered
  expect(getByText('9/30/2023')).toBeInTheDocument();
  
  // Check if the body is rendered
  expect(getByText('This is the body of the article.')).toBeInTheDocument();
  
  // Check if the image is rendered
  expect(getByAltText('Test Article')).toHaveAttribute('src', 'https://example.com/image.jpg');
});