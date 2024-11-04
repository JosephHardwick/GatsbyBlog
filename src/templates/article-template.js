// src/templates/recipe-template.js
import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ArticleTemplate = ({ data }) => {
  const article = data.Drupal.nodeArticle

  return (
    <Layout pageTitle={article.title}>
      
      
    <div>
        <img src={article.mediaImage.mediaImage.url} alt={article.title} style={{ maxWidth: '100%' }}/>
        
        <p>By {article.author.displayName}</p>
        <p>{new Date(article.created).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: article.body.processed }} />
    </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    Drupal {
    nodeArticle(id: $id ) {
      author {
        displayName
      }
      body {
        processed
      }
      created
      title
      mediaImage {
        mediaImage {
          url
        }
      }
    }
  }
  }
`

export default ArticleTemplate