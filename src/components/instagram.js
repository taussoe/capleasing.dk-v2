import React from 'react'
import axios from 'axios'
import ResponsiveImage from './responsive-image'
import styled from 'styled-components'
import TextBlock from '../components/textblock'
import CapButton from '../components/button'

const InstaGrid = styled.div`
  grid-row: 1;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;
  grid-column: 2/12;
  padding: 30px;
  .instagram-image-container {
    padding: 0px;
    display: block;
    height: 100%;
    &:first-child {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    &:last-child {
      grid-column: 4/6;
      grid-row: 2/4;
    }
    div {
      height: 100%;
    }
  }
`

const Instagram = class Instagram extends React.Component {
  state = {
    data: [],
  }
  getInstagram = () => {
    console.log('get instagram')
    const instathis = this
    this.instarequest = axios
      .get('https://www.instagram.com/capleasing/?__a=1')
      .then(result => {
        instathis.setState({
          data: result.data.user.media.nodes,
        })
      })
  }
  componentDidMount() {
    this.getInstagram()
  }
  componentDidUpdate() {
    console.log('update', this.state.datas)
  }
  componentWillUnMount() {
    this.instarequest.abort()
  }
  render() {
    let instafeed = this.state.data.slice(0, 9).map((e, i) => {
      return (
        <div className="instagram-image-container" key={`instagrammap${i}`}>
          <TextBlock
            translateFrom={`translateX(-20px)`}
            translateTo={`translateX(0px)`}
            transitionDelay={`0.2s`}
            triggerOnce={true}
            padding="0px"
          >
            <ResponsiveImage
              src={e.thumbnail_src}
              alt={e.thumbnail_src}
              key={`insta-${i}`}
            />
          </TextBlock>
        </div>
      )
    })
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 center">
              <h2>INSTAGRAM</h2>
            </div>
          </div>
        </div>
        <div className="center">
          <CapButton
            href="https://www.instagram.com/capleasing/"
            target="_blank"
            margin="10px 0px 20px 0px"
            external="True"
          >
            Følg os
          </CapButton>
        </div>
        <InstaGrid>{instafeed}</InstaGrid>
      </div>
    )
  }
}

export default Instagram
