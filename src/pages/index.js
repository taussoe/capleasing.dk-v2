import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Script from 'react-load-script'
import styled, { injectGlobal } from 'styled-components'
import CapComponent from '../components/cap-component'
import Footer from '../components/footer'
import Menu from '../components/menu'
import ReactDOM from 'react-dom'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
html,body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
h1, h2 {
  overflow-wrap: break-word;
    word-wrap: break-word;
}
h1 {
  font-size: 65px;
  font-weight: 800;
}

h2 {
  font-size: 40px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 53px;
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
  margin-bottom: 455px;
  z-index: 2;
  background-color: #ffffff;
  position: relative;
  border-bottom: 1px solid #eee;
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

  scrollTo = (element, to, duration) => {
    console.log('trigger scroll')
    if (duration <= 0) return
    var offsetTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    var difference = to - offsetTop
    var perTick = difference / duration * 10

    setTimeout(
      function() {
        var offsetTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        /* element.scrollTop = element.scrollTop + perTick */
        window.scrollTo(0, offsetTop + perTick)
        if (offsetTop === to) return
        this.scrollTo(element, to, duration - 10)
      }.bind(this),
      10
    )
  }

  dpoScroll = (id, duration) => {
    let d = ReactDOM.findDOMNode(this.refs[id]).getBoundingClientRect()
    console.log(d)
    let element = ReactDOM.findDOMNode(this.refs[id]).getBoundingClientRect(),
      bElem = document.body.getBoundingClientRect(),
      offset = element.top - bElem.top
    this.scrollTo(document.body, offset, duration)
  }

  render() {
    console.log(this.props)
    const c = this.props.data.home.frontmatter.components.sektioner
    return (
      <div>
        <Main>
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />
          <Menu dpoScroll={this.dpoScroll} data={this.props.data} />
          {c.map((e, i) => {
            return (
              <CapComponent
                key={`component-${i}`}
                ref={`component${i}`}
                data={e}
                alldata={this.props.data}
              />
            )
          })}
        </Main>
        <Footer />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query indexKontaktAndIndexByPath {
    home: markdownRemark(frontmatter: { path: { eq: "/" } }) {
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
            menuname
          }
        }
      }
    }
    kontaktpersoner: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/kontaktpersoner/" } } }
    ) {
      edges {
        node {
          frontmatter {
            contactimage
            title
            contacttitle
            contacteducation
            contacttelephone
            contactemail
          }
        }
      }
    }
  }
`
