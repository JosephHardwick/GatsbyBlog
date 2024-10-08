import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby';

const RecipePage = ({ data }) => {
  const recipes = data?.Drupal?.nodeRecipes?.nodes || [];

  return (
    <Layout pageTitle="recipe">
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    Drupal {
      nodeRecipes(first: 100) {
        nodes {
          id
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home Page" />

export default RecipePage