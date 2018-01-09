import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Flexboxgrid from 'flexboxgrid'
import Menu from '../components/menu'
import { InterScroll } from '../components/functions'
import ReactDOM from 'react-dom'

const TemplateWrapper = class TemplateWrapper extends React.Component {
  state = {
    scrollTo: undefined,
  }
  handleScroll = (id, duration) => {
    if (ReactDOM.findDOMNode(this.state.childRef[id])) {
      InterScroll(ReactDOM.findDOMNode(this.state.childRef[id]), 2000)
    } else {
      this.setState({
        scrollTo: id,
      })
    }
  }
  setRefs(r) {
    this.setState(
      {
        childRef: r,
      },
      () => {
        if (this.state.scrollTo) {
          this.handleScroll(this.state.scrollTo, 2000)
        }
      }
    )
  }
  render() {
    const setRefs = this.setRefs.bind(this)
    return (
      <div>
        <Helmet title="Cap Leasing" />
        <Menu interScroll={this.handleScroll} data={this.props.data} />
        <div>{this.props.children({ ...this.props, setRefs })}</div>
      </div>
    )
  }
}

export default TemplateWrapper

export const pageQuery = graphql`
  query menuQuery {
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
  }
`
