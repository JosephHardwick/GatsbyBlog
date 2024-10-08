// gatsby-node.js
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      Drupal {
        nodeRecipes(first: 100) {
          nodes {
            id
            title
          }
        }
      }
    }
  `)

  const recipeTemplate = path.resolve('src/pages/recipe-template.js')

  result.data.Drupal.nodeRecipes.nodes.forEach(recipe => {
    createPage({
      path: `/recipe/${recipe.id}`,
      component: recipeTemplate,
      context: {
        id: recipe.id,
      },
    })
  })
}