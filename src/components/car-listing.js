import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import Link from 'gatsby-link'

const CarContainer = styled.div`
  ul {
    list-style: none;
  }
`

const CarLi = styled.li`
  opacity: ${props => (props.show ? '1' : '0')};
  transform: ${props => (props.show ? 'translateX(0px)' : 'translateX(-20px)')};
  transition: opacity ease-in-out 0.5s, transform ease-in-out 0.5s;
  margin: 40px 0px 40px 0px;
  .car-container {
    display: flex;
    .flex-grow {
      flex-grow: 1;
    }
    .car-title {
      font-size: 25px;
      font-weight: 700;
      padding-bottom: 10px;
      padding-top: 8px;
    }
    .car-price {
      font-weight: 700;
    }
    .car-info-container {
      padding-left: 30px;
    }
    .car-cta {
      padding-right: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        background-color: #000000;
        padding: 10px 15px;
        font-size: 16px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  .thumb {
    width: 200px;
    height: 130px;
    background-size: cover;
    background-position: center;
  }
`

export default props => (
  <CarContainer>
    <ul>
      {props.data.map((e, i) => {
        return (
          <Observer triggerOnce={true} threshold="0.8" key={`car-list-${i}`}>
            {inView => (
              <CarLi key={`car-list-${i}`} show={inView}>
                <div className="car-container">
                  <div className="car-flex">
                    <div
                      className="thumb"
                      style={{
                        backgroundImage: `url(${e.node.frontmatter.pictures
                          .picturelist[0].image})`,
                      }}
                    />
                  </div>
                  <div className="car-flex flex-grow car-info-container">
                    <div className="car-title">{e.node.frontmatter.title}</div>
                    <div className="car-info">
                      Årgang: {e.node.frontmatter.year}
                    </div>
                    <div className="car-mileage">
                      Kilometer:&nbsp;{parseInt(e.node.frontmatter.kilometer)
                        .toFixed(0)
                        .replace(/./g, function(c, i, a) {
                          return i && c !== '.' && (a.length - i) % 3 === 0
                            ? '.' + c
                            : c
                        })}
                    </div>
                    <div className="car-price">
                      månedlig ydelse:&nbsp;
                      {parseInt(e.node.frontmatter.monthlycost)
                        .toFixed(0)
                        .replace(/./g, function(c, i, a) {
                          return i && c !== '.' && (a.length - i) % 3 === 0
                            ? '.' + c
                            : c
                        })}&nbsp;kr.
                    </div>
                  </div>
                  <div className="car-flex car-cta">
                    <Link
                      to={`/showroom`}
                      onClick={event => {
                        event.preventDefault()
                        props.openOverlay(e)
                      }}
                    >
                      Læs mere
                    </Link>
                  </div>
                </div>
              </CarLi>
            )}
          </Observer>
        )
      })}
    </ul>
  </CarContainer>
)
