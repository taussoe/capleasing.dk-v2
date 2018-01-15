import React from 'react'
import styled from 'styled-components'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

const OverlayContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  z-index: 200;
  transition: all ease-in-out 1s;
  opacity: ${props => (props.showOverlay ? '1' : '0')};
  visibility: ${props => (props.showOverlay ? 'visible' : 'hidden')};
  .closeOverlay {
    display: block;
    top: 10px;
    right: 10px;
    font-size: 40px;
    color: #000000;
    position: absolute;
    cursor: pointer;
  }
  .container {
    background-color: #ffffff;
    padding: 20px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .thumbswiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .thumbswiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .thumbswiper .swiper-slide-active {
    opacity: 1;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  overflow: scroll;
`

const Overlay = class Overlay extends React.Component {
  swiperConfig = {
    loop: true,
    spaceBetween: 320,
    setWrapperSize: true,
    zoom: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  }
  swiperThumbConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  }
  componentDidUpdate() {
    /* this.swiper = new Swiper('.topswiper', this.swiperConfig)
    this.thumbswiper = new Swiper('.thumbswiper', this.swiperThumbConfig)
    this.swiper.controller.control = this.thumbswiper
    this.thumbswiper.controller.control = this.swiper */
    setTimeout(() => {
      this.swiper.update()
    }, 2000).bind(this)

    console.log(this.swiper)
    console.log(this.props.overlayData)
  }
  componentDidMount() {
    this.swiper = new Swiper('.topswiper', this.swiperConfig)
    this.thumbswiper = new Swiper('.thumbswiper', this.swiperThumbConfig)
  }
  render() {
    console.log(this.props)
    let slide = {}
    let thumbs = {}
    if (this.props.overlayData.node) {
      slide = this.props.overlayData.node.frontmatter.pictures.picturelist.map(
        (item, index) => {
          return (
            <div key={`slide-${index}`} id={item.id} className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src={item.image} alt="image" />
              </div>
            </div>
          )
        }
      )
    }
    if (this.props.overlayData.node) {
      thumbs = this.props.overlayData.node.frontmatter.pictures.picturelist.map(
        (item, index) => {
          return (
            <div
              key={`thumb-${index}`}
              className="swiper-slide"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
          )
        }
      )
    }

    return (
      <OverlayContainer showOverlay={this.props.showOverlay}>
        {this.props.overlayData.node && (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="swiper-container topswiper">
                    <div ref="swiperWrapper" className="swiper-wrapper">
                      {slide}
                    </div>
                    <div className="swiper-pagination" />

                    <div
                      className="swiper-button-next swiper-button-white"
                      onClick={() => this.swiper.slideNext()}
                    />
                    <div
                      className="swiper-button-prev swiper-button-white"
                      onClick={() => this.swiper.slidePrev()}
                    />
                  </div>
                  <div className="swiper-container thumbswiper">
                    <div className="swiper-wrapper">{thumbs}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="closeOverlay"
              onClick={() => this.props.closeOverlay()}
            >
              X
            </div>
          </div>
        )}
      </OverlayContainer>
    )
  }
}

export default Overlay
