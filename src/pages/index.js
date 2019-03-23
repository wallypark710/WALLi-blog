import React from "react"
import { Link, graphql } from "gatsby"
import "./post.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const listStyle = {
  color: "rgb(9,92,23)",
  textDecorationLine: "none",
}

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="mainPage">
        {postList.edges.map(({ node }, i) => (
          <Link
            to={node.fields.slug}
            className="link"
            style={listStyle}
            key={node.frontmatter.title.toString()}
          >
            <div className="post-list">
              <h1 style={{ marginBottom: 10 }}>{node.frontmatter.title}</h1>
              <p style={{ marginBottom: 15, fontFamily: "Helvetica" }}>
                {node.frontmatter.date}
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontFamily: "Helvetica",
                  fontWeight: "bold",
                }}
              >
                {node.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
