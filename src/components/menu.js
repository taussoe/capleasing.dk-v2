import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import { InterScroll } from './functions'
import ReactDOM from 'react-dom'
import slug from 'slug'

const Navigation = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  transition: background-color ease-in-out 0.5s, border-bottom ease-in-out 0.5s;
  background-color: ${props => (props.solidMenu ? '#ffffff' : 'transparent')};
  padding: 5px 0px 5px 0px;
  border-bottom: ${props =>
    props.solidMenu ? '1px solid #eeeeee' : '1px solid transparent'};
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

const Menu = class Menu extends React.Component {
  state = {
    solidMenu: false,
  }
  handleScroll() {
    if (window.pageYOffset > 20 && !this.state.solidMenu) {
      this.setState({
        solidMenu: true,
      })
    } else if (window.pageYOffset < 20 && this.state.solidMenu) {
      this.setState({
        solidMenu: false,
      })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  menuClick(e, menuname) {
    //e.preventDefault()
    let gRef = slug(menuname)
    this.props.interScroll(gRef, 2000)
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
                to={`/`}
                onClick={event => this.menuClick(event, e.menuname)}
              >
                {e.menuname}
              </Link>
            </MenuLi>
          )}
        </Observer>
      )
    })
    return (
      <div>
        <Navigation solidMenu={this.state.solidMenu}>
          <ul>
            {menuItem}
            <Observer triggerOnce={true} key={`menuitem-showroom`}>
              {inView => (
                <MenuLi tDelay={menu.length * 0.1} show={inView}>
                  <Link to={`/showroom`}>Showroom</Link>
                </MenuLi>
              )}
            </Observer>
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
