import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import { InterScroll } from './functions'
import ReactDOM from 'react-dom'

const Navigation = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  .logo {
    position: absolute;
    top: 15px;
    right: 30px;
    display: block;
    img {
      width: 35px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    font-weight: 700;
  }
`

const MenuLi = styled.li`
  padding: 20px 10px;
  transition: ease-in-out all 0.2s;
  transition-delay: ${props => (props.tDelay ? props.tDelay : '0')}s;
  opacity: ${props => (props.show ? '1' : '0')};
  transform: ${props => (props.show ? 'translateY(0px)' : 'translateY(-10px)')};
  a {
    text-decoration: none;
    color: #1d1e1c;
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

const Menu = class Menu extends React.Component {
  setActive = (clink, loc) => {
    console.log('click')
    return false
    /* let currentLink = clink.split('/')[1]
        let arrCur = this.props.loc.pathname.split('/')
        if (arrCur.length >= 2) {
          let r = arrCur[2] === currentLink ? true : false
          return r
        } else {
          return false
        } */
  }
  menuClick(e, menuname) {
    e.preventDefault()
    console.log('click ' + menuname)
    // this.props.dpoScroll('component4', 2000)
    //InterScroll(this, 'component4', 2000)
    this.props.interScroll('component4', 2000)
  }
  render() {
    let menu = this.props.data.home.frontmatter.components.sektioner.filter(
      e => e.menuname
    )
    let menuItem = menu.map((e, i) => {
      return (
        <Observer triggerOnce={true} key={`menuitem-${i}`}>
          {inView => (
            <MenuLi tDelay={i * 0.1} show={inView}>
              <Link
                to={`/${e.menuname}`}
                onClick={event => this.menuClick(event, e.menuname)}
              >
                {e.menuname}
              </Link>
            </MenuLi>
          )}
        </Observer>
      )
    })
    console.log(menu)
    return (
      <div>
        <Navigation>
          <ul>{menuItem}</ul>
          <div className="logo">
            <img src="img/cap-leasing-logo.svg" />
          </div>
        </Navigation>
      </div>
    )
  }
}

export default Menu
