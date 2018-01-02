import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'

const TextBlock = styled.div`
  padding: 50px;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: 0.5s ease-in-out all;
  transform: ${props => (props.show ? props.translateTo : props.translateFrom)};
  transition-delay: ${props => props.transitionDelay};
  &.bottom {
    position: absolute;
    bottom: 0px;
  }
`

export default props => (
  <Observer triggerOnce={props.triggerOnce} threshold="1">
    {inView => (
      <TextBlock
        translateFrom={
          props.translateFrom ? props.translateFrom : 'translateY(-10px)'
        }
        translateTo={props.translateTo ? props.translateTo : 'translateY(0px)'}
        show={inView}
        className={props.className}
        transitionDelay={props.transitionDelay ? props.transitionDelay : '0s'}
      >
        {props.children}
      </TextBlock>
    )}
  </Observer>
)
