import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import TextBlock from '../components/textblock'

const ImageContainer = styled.div`
  background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : ''});
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.backgroundImage ? '1' : '0')};
  height: 100%;
  width: 100%;
  img {
    width: 100%;
  }
`

const ResponsiveImage = class ResponsiveImage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }

  handleImageLoaded = () => {
    console.log('image loaded')
    this.setState({ loading: false })
  }
  handleImageError = () => {
    console.log('error loading image')
  }
  componentDidMount() {
    console.log(this.props)
    let imageUrl = this.props.src
    this.image = new Image()
    this.image.src = imageUrl
    this.image.onload = this.handleImageLoaded
    this.image.onerror = this.handleImageError
  }
  render() {
    return (
      <ImageContainer
        backgroundImage={!this.state.loading ? this.image.src : ''}
      >
        <img src={this.props.src} alt="image" />
      </ImageContainer>
    )
  }
}

export default ResponsiveImage
