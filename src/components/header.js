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
  margin: 0 20px;
`

const BlogLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 0 20px;
`

const SubLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 0 20px;
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
        <SubLink to="/blog">About</SubLink>
        <BlogLink to="/blog">Tech</BlogLink>
        <SubLink
          to="/"
          onClick={() =>
            window.open("https://github.com/wallypark710", "__blank")
          }
        >
          Github
        </SubLink>
        <SubLink to="/blog">TIL</SubLink>
        <SubLink to="/life-blog">Life</SubLink>
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
