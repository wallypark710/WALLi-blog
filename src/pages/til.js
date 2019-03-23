import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="TIL" />
    <h1>walli's blog</h1>
    <p>THREE</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage

