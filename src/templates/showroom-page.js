import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { InterScroll } from '../components/functions'
import styled from 'styled-components'
import Script from 'react-load-script'

const Main = styled.div`
  margin-bottom: 455px;
  z-index: 2;
  background-color: #ffffff;
  position: relative;
  border-bottom: 1px solid #eee;
`

export default class Showroom extends React.Component {
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

  handleScroll = (id, duration) => {
    InterScroll(ReactDOM.findDOMNode(this.refs[id]), 2000)
  }

  render() {
    console.log(this)
    return (
      <div>
        <Main>
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Menu interScroll={this.handleScroll} data={this.props.data} />
        </Main>
        <Footer interScroll={this.handleScroll} data={this.props.data} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query indexShowroom {
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
