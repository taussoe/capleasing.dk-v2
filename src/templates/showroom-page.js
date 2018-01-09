import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { InterScroll } from '../components/functions'
import styled from 'styled-components'
import Script from 'react-load-script'
import HalfHero from '../components/half-hero'
import CapComponent from '../components/cap-component'

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
    let lorem = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla ex, maximus non quam ac, aliquet volutpat ante. Mauris ac condimentum augue. Morbi laoreet maximus urna. Quisque efficitur dictum suscipit. Nunc malesuada ligula eget fringilla condimentum. Donec nibh nibh, scelerisque eget luctus vitae, iaculis vitae nunc. In semper at sapien sed tincidunt. Cras congue quis urna vel sollicitudin. Suspendisse molestie id felis at fermentum. Nullam lacinia dapibus tempor. Praesent ligula orci, dapibus feugiat nunc at, posuere bibendum nisi. In tempus ex eu nulla fermentum varius. Morbi imperdiet mauris tellus, id posuere enim vestibulum vitae. Aenean in maximus mi.

Aenean rhoncus egestas nisl. Aliquam a mi eget odio commodo vestibulum at ut ante. Cras elementum diam ut mattis tempor. Mauris vulputate in justo ut sodales. Integer eget condimentum lectus. Praesent sit amet consequat leo. Nunc et nunc at libero egestas molestie vel egestas turpis. Suspendisse elementum metus in sem feugiat, eu facilisis justo iaculis. Donec efficitur nisi est, ac imperdiet nisi finibus ut. Maecenas dictum faucibus felis bibendum eleifend. Nunc congue dictum lacus ac tincidunt.

Nam dignissim, enim a gravida egestas, arcu ligula faucibus quam, vulputate ultrices justo dolor ac nibh. Donec dignissim luctus enim, a eleifend augue aliquam sit amet. Morbi eu felis mauris. Donec mattis ex id bibendum viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam volutpat varius massa. Aliquam ac nisi finibus, finibus orci id, euismod metus. Nullam tincidunt lectus et orci dignissim, sit amet feugiat tellus blandit.

Proin quis odio ac mi ullamcorper dapibus nec hendrerit enim. Fusce eleifend mattis congue. Cras lacinia, ex vel placerat tincidunt, neque turpis lacinia justo, vitae pellentesque dui metus eu ipsum. Donec ex metus, sollicitudin sit amet libero ut, lobortis tempus urna. Donec dapibus diam eu mi molestie pharetra. Quisque eget lacus vel massa pulvinar porta. Nulla in orci metus. Duis lorem magna, pharetra et lacinia varius, faucibus a velit. Ut rhoncus scelerisque vestibulum. Proin sed dignissim nisi. Aenean hendrerit ipsum orci, sed ullamcorper massa ornare ut. Nulla vel viverra nunc. Maecenas pretium leo molestie, lacinia metus sit amet, pharetra nunc. Quisque ultrices condimentum magna, sed tempus enim ultrices non. Sed aliquam gravida justo et interdum. Nullam ut porttitor eros, porta porttitor risus.

Sed in egestas eros. Donec pretium purus eget velit mollis, eget imperdiet odio mollis. Nulla sodales odio augue. Duis non lectus dui. Suspendisse potenti. Sed sed euismod erat, ac vulputate massa. Nulla magna nulla, ullamcorper vel ultrices id, iaculis sed quam. Nulla viverra magna vel arcu volutpat, vitae elementum leo interdum. Donec nisl enim, viverra id enim ut, accumsan vehicula elit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla ex, maximus non quam ac, aliquet volutpat ante. Mauris ac condimentum augue. Morbi laoreet maximus urna. Quisque efficitur dictum suscipit. Nunc malesuada ligula eget fringilla condimentum. Donec nibh nibh, scelerisque eget luctus vitae, iaculis vitae nunc. In semper at sapien sed tincidunt. Cras congue quis urna vel sollicitudin. Suspendisse molestie id felis at fermentum. Nullam lacinia dapibus tempor. Praesent ligula orci, dapibus feugiat nunc at, posuere bibendum nisi. In tempus ex eu nulla fermentum varius. Morbi imperdiet mauris tellus, id posuere enim vestibulum vitae. Aenean in maximus mi.

Aenean rhoncus egestas nisl. Aliquam a mi eget odio commodo vestibulum at ut ante. Cras elementum diam ut mattis tempor. Mauris vulputate in justo ut sodales. Integer eget condimentum lectus. Praesent sit amet consequat leo. Nunc et nunc at libero egestas molestie vel egestas turpis. Suspendisse elementum metus in sem feugiat, eu facilisis justo iaculis. Donec efficitur nisi est, ac imperdiet nisi finibus ut. Maecenas dictum faucibus felis bibendum eleifend. Nunc congue dictum lacus ac tincidunt.

Nam dignissim, enim a gravida egestas, arcu ligula faucibus quam, vulputate ultrices justo dolor ac nibh. Donec dignissim luctus enim, a eleifend augue aliquam sit amet. Morbi eu felis mauris. Donec mattis ex id bibendum viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam volutpat varius massa. Aliquam ac nisi finibus, finibus orci id, euismod metus. Nullam tincidunt lectus et orci dignissim, sit amet feugiat tellus blandit.

Proin quis odio ac mi ullamcorper dapibus nec hendrerit enim. Fusce eleifend mattis congue. Cras lacinia, ex vel placerat tincidunt, neque turpis lacinia justo, vitae pellentesque dui metus eu ipsum. Donec ex metus, sollicitudin sit amet libero ut, lobortis tempus urna. Donec dapibus diam eu mi molestie pharetra. Quisque eget lacus vel massa pulvinar porta. Nulla in orci metus. Duis lorem magna, pharetra et lacinia varius, faucibus a velit. Ut rhoncus scelerisque vestibulum. Proin sed dignissim nisi. Aenean hendrerit ipsum orci, sed ullamcorper massa ornare ut. Nulla vel viverra nunc. Maecenas pretium leo molestie, lacinia metus sit amet, pharetra nunc. Quisque ultrices condimentum magna, sed tempus enim ultrices non. Sed aliquam gravida justo et interdum. Nullam ut porttitor eros, porta porttitor risus.

Sed in egestas eros. Donec pretium purus eget velit mollis, eget imperdiet odio mollis. Nulla sodales odio augue. Duis non lectus dui. Suspendisse potenti. Sed sed euismod erat, ac vulputate massa. Nulla magna nulla, ullamcorper vel ultrices id, iaculis sed quam. Nulla viverra magna vel arcu volutpat, vitae elementum leo interdum. Donec nisl enim, viverra id enim ut, accumsan vehicula elit.
    `
    console.log(this)
    let cars = this.props.data.carmodel.edges.map((e, i) => {
      let data = {
        component: 'PictureRight',
        overskrift: e.node.frontmatter.title,
        text: e.node.html,
        image: e.node.frontmatter.carimage,
      }
      console.log(data)
      return (
        <CapComponent
          key={`component-${i}`}
          data={data}
          alldata={this.props.data}
        />
      )
    })
    console.log(cars)
    return (
      <div>
        <Main>
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />
          <HalfHero
            src={this.props.data.markdownRemark.frontmatter.image}
            text={this.props.data.markdownRemark.html}
            lorem={lorem}
          />
          {cars}
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
          }
          html
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        image
        path
      }
    }
  }
`
