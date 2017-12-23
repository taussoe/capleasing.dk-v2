import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Script from 'react-load-script'
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
html,body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 65px;
  font-weight: 800;
}

h2 {
  font-size: 45px;
  font-weight: 800;
  text-transform: uppercase;
}

.spacing {
  padding: 50px 0px;
}
`

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    console.log(this.props)
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => {
              return (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link
                      className="has-text-primary"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link
                      className="button is-small"
                      to={post.frontmatter.path}
                    >
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              )
            })}
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
