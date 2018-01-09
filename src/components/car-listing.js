import React from 'react'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import Link from 'gatsby-link'

const biler = [
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
    { title: 'Porsche Macman Turbo 3,6 PDK', year: '2014', mileage: '74.000', ydelse: '8300' },
]

const CarContainer = styled.div`
    ul {
        list-style: none;
    }
`

const CarLi = styled.li`
    opacity: ${props => props.show ? '1' : '0'};
    transform: ${props => props.show ? 'translateX(0px)' : 'translateX(-20px)'};
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
            a  {
                background-color: #000000;
                padding: 10px 15px;
                font-size: 16px;
                color: #ffffff;
                text-decoration: none;
            }
            
        }
    }

`

export default (props) => (
    <CarContainer>
        <ul>
            {biler.map((e, i)=>{
                return (
                    <Observer triggerOnce={true} threshold="0.8" key={`car-list-${i}`}>
                        {inView => (
                        <CarLi key={`car-list-${i}`} show={inView}>
                            <div className="car-container">
                                <div className="car-flex">
                                    <img src="http://via.placeholder.com/200x130" alt={e.title}/>
                                </div>
                                <div className="car-flex flex-grow car-info-container">
                                    <div className="car-title">{e.title}</div>
                                    <div className="car-info">Årgang {e.year}</div>
                                    <div className="car-mileage">{e.mileage} km</div>
                                    <div className="car-price">{
                                        parseInt(e.ydelse).toFixed(0).replace(/./g, function(c, i, a) {
                                            return i && c !== "." && ((a.length - i) % 3 === 0) ? '.' + c : c;
                                        })
                                    } kr. månedlig ydelse</div>
                                </div>
                                <div className="car-flex car-cta">
                                    <Link to={`/showroom`}>Læs mere</Link>
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