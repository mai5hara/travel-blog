import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children, navList }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div style={{display: `flex`, justifyContent: `space-between`}}>
        <h1
          style={{
            ...scale(1),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <nav
          style={{
            listStyle: `none`,
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <li style={{marginRight: rhythm(0.8), marginBottom: 0}}>{navList[0]}</li>
          <li style={{marginRight: rhythm(0.8), marginBottom: 0}}>{navList[1]}</li>
          <li style={{marginRight: rhythm(0.6), marginBottom: 0}}>{navList[2]}</li>
        </nav>
      </div>
    )
  } else {
    header = (
      <div>
        <h1
          style={{
            fontFamily: `Montserrat, sans-serif`,
            ...scale(1),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <nav>
          <li>{navList[0]}</li>
          <li>{navList[1]}</li>
          <li>{navList[2]}</li>
        </nav>
      </div>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header
        style={{
          maxWidth: rhythm(60),
          padding: `${rhythm(3 / 4)}`,
          backgroundColor: `orange`
        }}
      >
        {header}
      </header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
      <footer
      style={{
        textAlign:  `center`,
        backgroundColor: `orange`,
        height: `3rem`,
        alignItems: `center`,
        lineHeight: `3rem`
      }}
      >
        © Mai Gohara
      </footer>
    </div>
  )
}

export default Layout
