import React from 'react'
import styled from 'styled-components'
import TextBlock from '../components/textblock'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  background-color: #f7f7f7;
  padding-top: 100px;
  padding-bottom: 50px;
`

export default props => (
  <FooterContainer>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <b>Nyhedsbrev</b> <br />
          Skriv dig op til vores nyhedsbrev og modtag gode tilbud på luksus
          leasing biler
        </div>
        <div className="col-md-2">
          <b>Links</b>
        </div>
        <div className="col-md-2">
          <b>Kontakt</b>
        </div>
      </div>
    </div>
  </FooterContainer>
)
