import React from 'react';
import { render } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import RecipeTemplate from '../src/templates/recipe-template';

// Mock the Layout component
jest.mock('../src/components/layout', () => {
  return function MockLayout({ children }) {
    return <div>{children}</div>;
  };
});

// Mock data
const mockData = {
  Drupal: {
    nodeRecipe: {
      title: 'Test Recipe',
      id: '1',
      ingredients: ['1 cup flour', '2 eggs', '1/2 cup sugar'],
      difficulty: 'Easy',
      cookingTime: 30,
      preparationTime: 15,
      recipeInstruction: {
        processed: '<p>Mix all ingredients and bake.</p>',
      },
      numberOfServings: 4,
      mediaImage: {
        mediaImage: {
          url: 'https://example.com/image.jpg',
        },
      },
    },
  },
};

test('renders ingredients correctly', () => {
  const { getByTestId } = render(<RecipeTemplate data={mockData} />);
  const ingredientsList = getByTestId('ingredients-list');
  const ingredients = ingredientsList.querySelectorAll('li');
  
  expect(ingredients).toHaveLength(mockData.Drupal.nodeRecipe.ingredients.length);
  mockData.Drupal.nodeRecipe.ingredients.forEach((ingredient, index) => {
    expect(ingredients[index]).toHaveTextContent(ingredient);
  });
});