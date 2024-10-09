import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby';

const ArticlePage = ({ data }) => {
  const articles = data?.Drupal?.nodeArticles?.nodes || [];

  return (
    <Layout pageTitle="Articles">
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
  Drupal {
    nodeArticles(first: 8) {
      nodes {
        id
        title
      }
    }
  }
}
`

export const Head = () => <Seo title="Home Page" />

export default ArticlePage