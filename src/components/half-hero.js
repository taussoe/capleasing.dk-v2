import React from 'react'
import styled from 'styled-components'
import ResponsiveImage from '../components/responsive-image'

const HalfHeroContainer = styled.div`
  min-height: 100vh;

  position: relative;
  top: 0px;
  .flex-container {
    display: flex;
  }
  .flex-col {
    width: 50%;
    position: relative;
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
      .text {
        padding-left: 50px;
        max-width: 400px;
      }
    }
  }
  .header {
    position: absolute;
    height: 100vh;
    width: 100%;
    .header-text {
      position: sticky;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      max-width: 300px;
      text-align: center;
    }
  }
`

export default class HalfHero extends React.Component {
  render() {
    return (
      <HalfHeroContainer>
        <div className="header">
          <div className="header-text">
            <h1>MØD VORES BILER</h1>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-col">
            <div className="text-container">
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: this.props.text }}
              />
            </div>
            <div className="content">{this.props.lorem}</div>
          </div>
          <div className="flex-col sticky">
            <ResponsiveImage src={this.props.src} />
          </div>
        </div>
      </HalfHeroContainer>
    )
  }
}
