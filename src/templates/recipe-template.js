// src/templates/recipe-template.js
import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const RecipeTemplate = ({ data }) => {
  const recipe = data.Drupal.nodeRecipe

  return (
    <Layout pageTitle={recipe.title}>
      
      
      <img src={recipe.mediaImage.mediaImage.url} alt={recipe.mediaImage.mediaImage.url} style={{ maxWidth: '100%' }}/>
     
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <p><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
      <p><strong>Number of Servings:</strong> {recipe.numberOfServings}</p>
      <h2>Ingredients</h2>
      <ul data-testid="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <div dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction.processed }} />
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    Drupal {
      nodeRecipe(id: $id) {
        title
        id
        ingredients
        difficulty
        cookingTime
        preparationTime
        recipeInstruction {
          processed
        }
        numberOfServings
         mediaImage {
          mediaImage {
            url
          }
        }
      }
    }
  }
`

export default RecipeTemplate