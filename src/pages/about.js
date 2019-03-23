import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./post.css"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
