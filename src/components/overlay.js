import React from 'react'
import styled from 'styled-components'

const OverlayContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background: rgba(255,255,255,0.5);
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
`

const Overlay = class Overlay extends React.Component{
    render(){
        return (
            <OverlayContainer>
                <div>Test of overlay</div>
            </OverlayContainer>
        )
    }
}

export default Overlay