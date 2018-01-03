import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'

const TextBlockStyle = styled.div`
  padding: ${props => (props.padding ? props.padding : '50px')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: 0.5s ease-in-out all;
  transform: ${props => (props.show ? props.translateTo : props.translateFrom)};
  transition-delay: ${props => props.transitionDelay};
  &.bottom {
    position: absolute;
    bottom: 0px;
  }
  h1,
  h2,
  h3 {
    position: relative;
    color: ${props => (props.show ? '#000000' : '#ffffff')};
    transition: color ease-in 0.1s;
    transition-delay: 0.5s;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 15;
      transform-origin: left center;
      background: #000000;
      animation: ${props =>
        props.show
          ? 'headeranim 1s cubic-bezier(0.77, 0, 0.175, 1) forwards'
          : ''};
      animation-delay: ${props => props.transitionDelay};
    }
  }
  @keyframes headeranim {
    0% {
      transform-origin: left center;
      transform: scaleX(0);
    }
    50% {
      transform-origin: left center;
      transform: scaleX(1);
    }
    50.001% {
      transform-origin: right center;
    }
    100% {
      transform-origin: right center;
      transform: scaleX(0);
    }
  }
`

const TextBlock = class TextBlock extends React.Component {
  state = {
    showHeader: false,
  }
  componentDidMount() {
    console.log('mount')
  }
  render() {
    return (
      <Observer triggerOnce={this.props.triggerOnce} threshold="0.8">
        {inView => (
          <TextBlockStyle
            translateFrom={
              this.props.translateFrom
                ? this.props.translateFrom
                : 'translateY(-10px)'
            }
            translateTo={
              this.props.translateTo
                ? this.props.translateTo
                : 'translateY(0px)'
            }
            show={inView}
            className={this.props.className}
            transitionDelay={
              this.props.transitionDelay ? this.props.transitionDelay : '0s'
            }
            padding={this.props.padding}
          >
            {this.props.children}
          </TextBlockStyle>
        )}
      </Observer>
    )
  }
}

export default TextBlock
