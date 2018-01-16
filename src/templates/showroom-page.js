import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { InterScroll } from '../components/functions'
import styled from 'styled-components'
import Script from 'react-load-script'
import HalfHero from '../components/half-hero'
import CapComponent from '../components/cap-component'
import CarListing from '../components/car-listing'
import Overlay from '../components/overlay'

const Main = styled.div`
  margin-bottom: 455px;
  z-index: 2;
  background-color: #ffffff;
  position: relative;
  border-bottom: 1px solid #eee;
`

export default class Showroom extends React.Component {
  state = {
    showOverlay: false,
    overlayData: {},
  }
  openOverlay(elem) {
    this.props.handleHideMenu()
    this.setState({
      showOverlay: true,
      overlayData: elem,
    })
    document.body.classList.add('no-overflow')
  }
  closeOverlay() {
    this.props.handleShowMenu()
    this.setState({
      showOverlay: false,
    })
    document.body.classList.remove('no-overflow')
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

  handleScroll = (id, duration) => {
    InterScroll(ReactDOM.findDOMNode(this.refs[id]), 2000)
  }

  render() {
    let cars = this.props.data.carmodel.edges.map((e, i) => {
      let component = i % 2 === 0 ? 'PictureRight' : 'PictureLeft'
      let data = {
        component: component,
        overskrift: e.node.frontmatter.title,
        text: e.node.frontmatter.text,
        image: e.node.frontmatter.carimage,
      }
      let listing = this.props.data.cars.edges.filter(
        elem => elem.node.frontmatter.carmodel === e.node.frontmatter.title
      )
      return (
        <div key={`carmodel-${i}`}>
          <CapComponent data={data} alldata={this.props.data} />
          <CarListing
            openOverlay={this.openOverlay.bind(this)}
            data={listing}
          />
        </div>
      )
    })
    return (
      <div>
        <Main>
          <Overlay
            showOverlay={this.state.showOverlay}
            closeOverlay={this.closeOverlay.bind(this)}
            overlayData={this.state.overlayData}
          />
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />
          <HalfHero
            src={this.props.data.markdownRemark.frontmatter.image}
            text={this.props.data.markdownRemark.frontmatter.text}
          />
          <div className="spacing" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">{cars}</div>
            </div>
          </div>
        </Main>
        <Footer interScroll={this.handleScroll} data={this.props.data} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query indexShowroom($path: String!) {
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
    carmodel: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/carmodel/" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            carimage
            text
          }
        }
      }
    }
    cars: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/cars/" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            carmodel
            title
            pictures {
              picturelist {
                image
              }
            }
            year
            monthlycost
            firstcost
            value
            volume
            cylindre
            ventiler
            gear
            traek
            type
            foerstereg
            kilometer
            braendstof
            farve
            doere
            effekt
            moment
            topfart
            nultilhundrede
          }
          html
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        image
        path
        text
      }
    }
  }
`
