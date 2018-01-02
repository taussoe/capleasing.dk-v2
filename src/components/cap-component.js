import React from 'react'
import Hero from './hero'
import Statement from './statement'
import ResponsiveImage from './responsive-image'
import TextBlock from './textblock'

const CapComponent = class CapComponent extends React.Component {
  render() {
    const c = this.props.data.component
    console.log(c)
    switch (c) {
      case 'Hero':
        return <Hero height="100vh" />
        break
      case 'Statement':
        return (
          <Statement>
            <h2>{this.props.data.overskrift}</h2>
            <span>{this.props.data.text}</span>
          </Statement>
        )
      case 'PictureRight':
        return (
          <div className="container">
            <div className="row spacing">
              <div className="col-md-5 margin-top-auto">
                <div className="text-padding-right">
                  <TextBlock
                    translateFrom={`translateX(-20px)`}
                    translateTo={`translateX(0px)`}
                    transitionDelay={`0.2s`}
                    triggerOnce={true}
                  >
                    <h2>{this.props.data.overskrift}</h2>
                    <span>{this.props.data.text}</span>
                  </TextBlock>
                </div>
              </div>
              <div className="col-md-7">
                <TextBlock
                  translateFrom={`translateX(20px)`}
                  translateTo={`translateX(0px)`}
                  transitionDelay={`0.2s`}
                  triggerOnce={true}
                >
                  <ResponsiveImage src={this.props.data.image} />
                </TextBlock>
              </div>
            </div>
          </div>
        )
      case 'PictureLeft':
        return (
          <div className="container">
            <div className="row spacing">
              <div className="col-md-7">
                <TextBlock
                  translateFrom={`translateX(-20px)`}
                  translateTo={`translateX(0px)`}
                  transitionDelay={`0.2s`}
                  triggerOnce={true}
                >
                  <ResponsiveImage src={this.props.data.image} />
                </TextBlock>
              </div>
              <div className="col-md-5 margin-top-auto">
                <div className="text-padding-left">
                  <TextBlock
                    translateFrom={`translateX(20px)`}
                    translateTo={`translateX(0px)`}
                    transitionDelay={`0.2s`}
                    triggerOnce={true}
                  >
                    <h2>{this.props.data.overskrift}</h2>
                    <span>{this.props.data.text}</span>
                  </TextBlock>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return <div>Component not recognized</div>
    }
  }
}

export default CapComponent
