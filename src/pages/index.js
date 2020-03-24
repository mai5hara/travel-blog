import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Post = styled.div`
  display: flex;
`

const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem
`

const PostText = styled.div`
  flex: 75%;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const nav = this.props.data.site.siteMetadata.nav
    const navList = [nav.list1,nav.list2,nav.list3]
    const posts = data.allContentfulPost.edges
    console.log(posts)
  
    return (
      <Layout location={this.props.location} title={siteTitle} navList={navList}>
        <SEO 
          title="Travel blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h2
          style={{
            marginTop: 0,
            textAlign: `center`
          }}
        >
          Where I went...
        </h2>

        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug} style={{display: `block`}}>
              <PostImage>
                <Img fluid={node.image.fluid} />
              </PostImage>
              <PostText>
                <header>
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.slug}>
                      {title}
                    </Link>
                  </h3>
                </header>
                <section>
                  <p>{node.subtitle}</p>
                </section>
              </PostText>
            </Post>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        nav {
          list1
          list2
          list3
        }
        author {
          name
          summary
        }
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          author
          slug
        }
      }
    }
  }
`
