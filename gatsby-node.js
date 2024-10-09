// gatsby-node.js
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeQ = await graphql(`
    query {
      Drupal {
        nodeRecipes(first: 10) {
          nodes {
            id
            title
          }
        }
      }
    }
  `)

  const articleQ = await graphql(`
    query {
    Drupal {
    nodeArticles(first: 8) {
      nodes {
        title
        id
      }
    }
  }
  }
  `)


  
  const recipeTemplate = path.resolve('src/templates/recipe-template.js')
  const articleTemplate = path.resolve('src/templates/article-template.js')

  recipeQ.data.Drupal.nodeRecipes.nodes.forEach(recipe => {
    createPage({
      path: `/recipe/${recipe.id}`,
      component: recipeTemplate,
      context: {
        id: recipe.id,
      },
    })
  })

  articleQ.data.Drupal.nodeArticles.nodes.forEach(article => {
    createPage({
      path: `/article/${article.id}`,
      component: articleTemplate,
      context: {
        id: article.id,
      },
    })
  })
}