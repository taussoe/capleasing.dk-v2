import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'

const Navigation = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
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
    /* let currentLink = clink.split('/')[1]
        let arrCur = this.props.loc.pathname.split('/')
        if (arrCur.length >= 2) {
          let r = arrCur[2] === currentLink ? true : false
          return r
        } else {
          return false
        } */
  }
  render() {
    return (
      <div>
        <Navigation>
          <ul>
            {menunav.map((menuitem, i) => (
              <Observer triggerOnce={true} key={menuitem.name}>
                {inView => (
                  <MenuLi
                    className={this.setActive(menuitem.link) ? 'selected' : ''}
                    tDelay={i * 0.1}
                    show={inView}
                  >
                    <Link
                      to={`/${menuitem.link}`}
                      onClick={() => this.setState({ show: false })}
                    >
                      {menuitem.name}
                    </Link>
                  </MenuLi>
                )}
              </Observer>
            ))}
          </ul>
          <div className="logo">
            <img src="img/cap-leasing-logo.svg" />
          </div>
        </Navigation>
      </div>
    )
  }
}

export default Menu
