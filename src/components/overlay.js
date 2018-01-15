import React from 'react'
import styled from 'styled-components'

const OverlayContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
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
`

const Overlay = class Overlay extends React.Component {
  render() {
    console.log(this.props)
    return (
      <OverlayContainer showOverlay={this.props.showOverlay}>
        <div>Test of overlay</div>
        <div className="closeOverlay" onClick={() => this.props.closeOverlay()}>
          X
        </div>
      </OverlayContainer>
    )
  }
}

export default Overlay
