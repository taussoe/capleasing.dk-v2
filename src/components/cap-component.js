import React from 'react'
import Hero from './hero'
import Statement from './statement'
import ResponsiveImage from './responsive-image'

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
                <h2>{this.props.data.overskrift}</h2>
                <span>{this.props.data.text}</span>
              </div>
              <div className="col-md-7">
                <ResponsiveImage src={this.props.data.image} />
              </div>
            </div>
          </div>
        )
      case 'PictureLeft':
        return (
          <div className="container">
            <div className="row spacing">
              <div className="col-md-7">
                <ResponsiveImage src={this.props.data.image} />
              </div>
              <div className="col-md-5 margin-top-auto">
                <h2>{this.props.data.overskrift}</h2>
                <span>{this.props.data.text}</span>
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
