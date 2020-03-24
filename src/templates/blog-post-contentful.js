import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class BlogPostContentfulTemplate extends React.Component {


  render() {

    // const useStyles = makeStyles(theme => ({
    //   root: {
    //     '& > *': {
    //       margin: theme.spacing(1),
    //     },
    //   },
    // }));

    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const nav = this.props.data.site.siteMetadata.nav
    const navList = [nav.list1,nav.list2,nav.list3]
    const { previous, next } = this.props.pageContext
    // const classes = useStyles()
  
    return (
      <Layout location={this.props.location} title={siteTitle} navList={navList}>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
        <article>
          <header>
            <Img fluid={post.image.fluid}/>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.title}
            </h1>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            {/* <Bio /> */}
          </footer>
        </article>
  
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  <Button variant="contained" color="primary" href="#contained-buttons">
                    ← {previous.title}
                  </Button>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  <Button variant="contained" color="primary" href="#contained-buttons">
                    {next.title} →
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
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
    contentfulPost( slug: {eq: $slug }) {
      title
      subtitle
      author
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
