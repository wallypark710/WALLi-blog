import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const BlogLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 15px;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">Home</HomeLink>
        <BlogLink to="/blog">Blog</BlogLink>
        <BlogLink to="/blog">Github</BlogLink>
        <BlogLink to="/blog">TIL</BlogLink>
        <BlogLink to="/blog">Life</BlogLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
