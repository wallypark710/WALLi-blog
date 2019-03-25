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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 70,
              textShadow: `3.5px 3.5px #ff0000`,
            }}
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
                to="/"
                style={{
                  textDecoration: `none`,
                }}
              >
                <h3
                  className="navEntry"
                  onClick={() =>
                    window.open("https://www.github.com/wallypark710", "_blank")
                  }
                >
                  GITHUB
                </h3>
              </Link>
            </div>

            <div className="navList">
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                }}
              >
                <h3
                  className="navEntry"
                  onClick={() =>
                    window.open(
                      "https://www.github.com/wallypark710/TIL",
                      "_blank"
                    )
                  }
                >
                  TIL
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            color: "rgb(245,243,66)",
            fontSize: "30px",
            textShadow: "2px 2px #ff0000",
            transform: "rotate(-10deg)",
            borderStyle: "solid",
            borderWidth: 6,
            height: 65,
            borderRadius: 8,
            borderColor: "rgb(238,14,246)",
            boxShadow:
              "3px 3px rgb(244 ,249, 241),  3px 3px rgb(244, 249, 241) inset",
          }}
        >
          <h3
            style={{ margin: "13px 15px" }}
          >{`Writing Code, Drinking Coffee`}</h3>
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
