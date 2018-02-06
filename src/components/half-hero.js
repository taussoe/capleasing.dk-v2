import React from 'react'
import styled from 'styled-components'
import { OptimizedImage } from './optimized-image'
import { media } from '../components/media-query'
import Img from 'gatsby-image'

const HalfHeroContainer = styled.div`
  min-height: 100vh;

  position: relative;
  top: 0px;
  .flex-container {
    display: flex;
  }
  .hero-col {
    width: 50%;
    position: relative;
    display: block;
    &.sticky {
      position: sticky;
      top: 0px;
      height: 100vh;
    }
    .text-container {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
    }
  }
  .header {
    position: absolute;
    height: 100vh;
    width: 100%;
    opacity: ${props => (props.showHeader ? '1' : '0')};
    transform: ${props =>
      props.showHeader ? 'translateY(0px)' : 'translateY(-40px)'};
    transition: all ease-in-out 0.5s;
    z-index: 1;
    .header-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      max-width: 300px;
      text-align: center;
    }
  }
  .flex-col {
    display: flex;
    height: 100vh;
    justify-content: flex-end;
    flex-direction: column;
    .text {
      padding: 20px;
      opacity: ${props => (props.showHeader ? '1' : '0')};
      transform: ${props =>
        props.showHeader ? 'translateY(0px)' : 'translateY(-40px)'};
      transition: all ease-in-out 0.5s;
    }
  }
  ul {
    list-style: none;
    padding: 0px 40px 20px 40px;
    li {
      padding: 20px 0px 20px 0px;
      font-size: 18px;
      border-bottom: 1px solid #dddddd;
      color: #56585d;
      font-size: 13px;
      &:hover {
        color: #000000;
        cursor: pointer;
      }
      &:last-child {
        border-bottom: 0px;
      }
      .car {
        display: flex;
        ${media.phone`
        flex-direction: column;
        `};
        .car-brand {
          font-weight: 700;
        }
        .price {
          flex-grow: 1;
          text-align: right;
          padding-top: 20px;
          font-weight: 700;
          font-size: 16px;
          ${media.phone`
          padding-top: 5px;
          text-align: left;
          `};
        }
      }
    }
  }
`

export default class HalfHero extends React.Component {
  state = {
    showHeader: true,
  }
  handleScroll() {
    if (window.pageYOffset > 100 && this.state.showHeader) {
      this.setState({
        showHeader: false,
      })
    } else if (window.pageYOffset < 100 && !this.state.showHeader) {
      this.setState({
        showHeader: true,
      })
    }
  }
  componentDidMount() {
    this.handleS = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.handleS)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleS)
  }
  render() {
    console.log(this.props.src.childImageSharp.sizes)
    return (
      <HalfHeroContainer showHeader={this.state.showHeader}>
        <div className="header">
          <div className="header-text">
            <h1>MØD VORES BILER</h1>
          </div>
        </div>
        <div className="flex-container">
          <div className="hero-col">
            <div className="flex-col">
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: this.props.text }}
              />
            </div>

            <div>
              <ul>
                {this.props.cars.edges.slice(0, 10).map((e, i) => {
                  return (
                    <li
                      key={`menucarlisting-${i}`}
                      onClick={() => {
                        this.props.openOverlay(e)
                      }}
                    >
                      <div className="car">
                        <div>
                          <div className="car-brand">
                            {e.node.frontmatter.title}
                          </div>
                          <div className="car-info">
                            Årgang: {e.node.frontmatter.year}
                          </div>
                          <div className="car-info">
                            Km:&nbsp;
                            {parseInt(e.node.frontmatter.kilometer)
                              .toFixed(0)
                              .replace(/./g, function(c, i, a) {
                                return i &&
                                  c !== '.' &&
                                  (a.length - i) % 3 === 0
                                  ? '.' + c
                                  : c
                              })}
                          </div>
                        </div>
                        <div className="price">
                          {parseInt(e.node.frontmatter.monthlycost)
                            .toFixed(0)
                            .replace(/./g, function(c, i, a) {
                              return i && c !== '.' && (a.length - i) % 3 === 0
                                ? '.' + c
                                : c
                            })}&nbsp; kr
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="hero-col sticky">
            <Img sizes={this.props.src.childImageSharp.sizes} />
          </div>
        </div>
      </HalfHeroContainer>
    )
  }
}
