import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import TextBlock from '../components/textblock'
import { media } from '../components/media-query'
import Img from 'gatsby-image'

const HeroContainer = styled.div`
  height: ${props => props.height};
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row;
  overflow: hidden;
  ${media.phone`
  flex-flow: column;
  height: auto;
  `};
`
const ImageContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-color: #000000;
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  transition-delay: 200ms;
  opacity: ${props => (!props.isLoading ? '1' : '0')};
  width: 50%;
  ${media.phone`
  width: 100%;
  height: 50vh;
  `};
`

const TextContainer = styled.div`
  flex-grow: 1;
  width: 50%;
  margin-top: auto;
  ${media.phone`
  width: 100%;
  `};
  .padding {
    ${media.phone`
    padding: 50px;
    `};
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  .gatsby-image-outer-wrapper {
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

const Hero = class Hero extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }
  handleImageLoaded = () => {
    this.setState({ loading: false })
  }
  handleImageError = () => {
    console.log('error loading image')
  }
  render() {
    console.log(this.props)
    return (
      <HeroContainer height={this.props.height ? this.props.height : 'auto'}>
        {this.props.image && <ImageWrapper>
          <Img resolutions={this.props.image.childImageSharp.sizes} />
        </ImageWrapper>}
        <TextContainer>
          <div className="padding">
            <TextBlock className="bottom" triggerOnce="true">
              <h1>{this.props.data.overskrift}</h1>
              <span>
                {this.props.data.text}
                
              </span>
            </TextBlock>
          </div>
        </TextContainer>
      </HeroContainer>
    )
  }
}

export default Hero
