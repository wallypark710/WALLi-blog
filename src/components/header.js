import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(9,92,23)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        style={{ margin: 0, fontSize: 70, textShadow: `3.5px 3.5px #ff0000` }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="navBox">
        <div className="navList">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <h3 className="navEntry">HOME</h3>
          </Link>
        </div>

        <div className="navList">
          <Link
            to="/about/"
            style={{
              textDecoration: `none`,
            }}
          >
            <h3 className="navEntry">ABOUT</h3>
          </Link>
        </div>

        <div className="navList">
          <Link
            to="https://github.com/wallypark710"
            style={{
              textDecoration: `none`,
            }}
          >
            <h3 className="navEntry">GITHUB</h3>
          </Link>
        </div>

        <div className="navList">
          <Link
            to="/til/"
            style={{
              textDecoration: `none`,
            }}
          >
            <h3 className="navEntry">TIL</h3>
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
