import React from 'react'
import styled from 'styled-components'
import TextBlock from '../components/textblock'
import Link from 'gatsby-link'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  background-color: #f7f7f7;
  padding-top: 100px;
  padding-bottom: 50px;
  .email-input {
    margin-top: 60px;
    border: 1px solid #000000;
    padding: 10px 15px;
    display: inline-block;
    .email-signup {
      background-color: transparent;
      border: 0px;
      font-size: 16px;
      width: 330px;
    }
    button {
      border: 0px;
      background-color: transparent;
      color: #000000;
    }
  }
  .social-link {
    text-decoration: none;
    margin: 5px;
    img {
      width: 23px;
    }
  }
  .padding {
    padding: 70px 10px 10px 10px;
  }
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    li {
      a {
        text-decoration: none;
        color: #000000;
      }
    }
  }
`

const menunav = [
  { name: 'Leasing', link: '/clients/' },
  { name: 'Profil', link: '/news-and-work/' },
  { name: 'Showroom', link: '/what-we-do/' },
  { name: 'Import', link: '/job/' },
  { name: 'Komission', link: '/contact/' },
  { name: 'Kontakt', link: '/contact/' },
]

export default props => (
  <FooterContainer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text">
            <b>Nyhedsbrev</b> <br />
            Skriv dig op til vores nyhedsbrev og modtag gode tilbud<br /> på
            luksus leasing biler
          </div>
          <div className="email-input">
            <input
              type="text"
              className="email-signup"
              placeholder="Indtast email..."
            />
            <button>Tilmeld</button>
          </div>
        </div>
        <div className="col-md-3">
          <b>Links</b>
          <br />
          <br />
          <ul>
            {menunav.map((menuitem, i) => (
              <li key={`footer-link-${i}`}>
                <Link
                  to={`/${menuitem.link}`}
                  onClick={() => this.setState({ show: false })}
                >
                  {menuitem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <b>Kontakt</b>
          <br />
          <br />
          Kattegatvej 39 <br />
          2150 Nordhavn<br />
          CVR. 33588666<br />
          72 22 48 00<br />
          info@cap-leasing.dk
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 center padding">
          <a href="#" target="_blank" className="social-link">
            <img src="img/instagram.png" alt="Instagram" />
          </a>
          <a href="#" target="_blank" className="social-link">
            <img src="img/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="#" target="_blank" className="social-link">
            <img src="img/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 center">
          &copy; Copyright 2015, Cap Leasing
        </div>
      </div>
    </div>
  </FooterContainer>
)
