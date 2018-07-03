import React from 'react'
import styled from 'styled-components'
import ResponsiveImage from './responsive-image'
import { media } from './media-query'

const KontaktContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${media.phone`
    flex-direction: column;
    align-items: center;
  `};
  .kontaktperson {
    width: 250px;
    margin: 10px;
    ${media.phone`
      padding-bottom: 40px;
      `};
    .image-container {
      margin-bottom: 30px;
      height: 350px;
      ${media.phone`
      height: 500px;
      `};
    }
    .info {
      text-align: center;
      a {
        color: #000000;
        text-decoration: none;
        border-bottom: 1px solid #000000;
      }
    }
    .bold {
      font-weight: 700;
    }
    .uppercase {
      text-transform: uppercase;
    }
  }
`
 function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const genreA = a.Order.toUpperCase();
  const genreB = b.Order.toUpperCase();

  let comparison = 0;
  if (genreA > genreB) {
    comparison = 1;
  } else if (genreA < genreB) {
    comparison = -1;
  }
  return comparison;
}
const contactSort = (props) => {
  let sorted = props.data
  sorted.sort((a,b)=>{
    return parseInt(a.node.frontmatter.order) - parseInt(b.node.frontmatter.order)
  })
  return sorted
}
export default props => (
  <KontaktContainer>
    {contactSort(props).map((e, i) => {
      return (
        <div key={`kontaktperson-${i}`} className="kontaktperson">
          {e.node.frontmatter.contactimage && (
            <div className="image-container">
              <ResponsiveImage
                src={encodeURIComponent(e.node.frontmatter.contactimage)}
                width="250px"
              />
            </div>
          )}
          {e.node.frontmatter.title && (
            <div className="info bold uppercase">
              {e.node.frontmatter.title}
            </div>
          )}
          {e.node.frontmatter.contacttitle && (
            <div className="info">{e.node.frontmatter.contacttitle}</div>
          )}
          {e.node.frontmatter.contacteducation && (
            <div className="info">{e.node.frontmatter.contacteducation}</div>
          )}
          {e.node.frontmatter.contacttelephone && (
            <div className="info"><a href={`tel:${e.node.frontmatter.contacttelephone}`}>{e.node.frontmatter.contacttelephone}</a></div>
          )}
          {e.node.frontmatter.contactemail && (
            <div className="info">
              <a href={`mailto:${e.node.frontmatter.contactemail}`}>
                {e.node.frontmatter.contactemail}
              </a>
            </div>
          )}
        </div>
      )
    })}
  </KontaktContainer>
)
