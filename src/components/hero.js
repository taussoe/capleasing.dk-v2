import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import TextBlock from '../components/textblock'
import { media } from '../components/media-query'

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
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  opacity: ${props => (props.backgroundImage !== false ? '1' : '0')};
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
  componentDidMount() {
    let imageUrl = 'img/leasing-hero.jpg'
    this.image = new Image()
    this.image.src = imageUrl
    this.image.onload = this.handleImageLoaded
    this.image.onerror = this.handleImageError
  }
  render() {
    return (
      <HeroContainer height={this.props.height ? this.props.height : 'auto'}>
        <ImageContainer
          backgroundImage={!this.state.loading ? this.image.src : false}
        />
        <TextContainer>
          <div className="padding">
            <TextBlock className="bottom" triggerOnce="true">
              <h1>ALLE FORMER FOR LEASING</h1>
              <span>
                Cap Leasing tilbyder alle former for leasing
                <ul>
                  <li>Sæsonleasing</li>
                  <li>Deleleasing/splitleasing</li>
                  <li>Privat og erhvervsleasing</li>
                  <li>Finansiel / operationel leasing</li>
                </ul>
                Du kan læse mere om de forskellige leasingformer på nedenstående
                link: https://www.interdan-leasing.dk/leasing
              </span>
            </TextBlock>
          </div>
        </TextContainer>
      </HeroContainer>
    )
  }
}

export default Hero
