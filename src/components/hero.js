import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import TextBlock from '../components/textblock'

const HeroContainer = styled.div`
  height: ${props => props.height};
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row;
  overflow: hidden;
`
const ImageContainer = styled.div`
  background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : ''});
  background-color: #000000;
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.backgroundImage ? '1' : '0')};
`

const TextContainer = styled.div`
  flex-grow: 1;
`

const Hero = class Hero extends React.Component {
  state = {
    loading: true,
  }
  handleImageLoaded = () => {
    console.log('image loaded')
    this.setState({ loading: false })
  }
  handleImageError = () => {
    console.log('error loading image')
  }
  componentWillMount() {
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
          backgroundImage={!this.state.loading ? this.image.src : ''}
        />
        <TextContainer>
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
        </TextContainer>
      </HeroContainer>
    )
  }
}

export default Hero
