import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Script from 'react-load-script'
import styled, { injectGlobal } from 'styled-components'
import CapComponent from '../components/cap-component'
import Instagram from '../components/instagram'
import Footer from '../components/footer'

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

.margin-top-auto {
  margin-top: auto;
}
.text-padding-left {
  padding: 0px 0px 0px 30px;
}
.text-padding-right {
  padding: 0px 30px 0px 0px;
}
.center {
  text-align: center;
}
`

const Main = styled.div`
  margin-bottom: 200px;
  z-index: 2;
  background-color: #ffffff;
  position: relative;
`

export default class IndexPage extends React.Component {
  renderComponent() {
    console.log('test')
  }
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
    const c = this.props.data.markdownRemark.frontmatter.components.sektioner
    console.log(c)
    return (
      <div>
        <Main>
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />
          {c.map((e, i) => {
            return <CapComponent key={`component-${i}`} data={e} />
          })}
          <Instagram />
        </Main>
        <Footer />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        description
        title
        image
        components {
          sektioner {
            component
            image
            overskrift
            text
          }
        }
      }
    }
  }
`
