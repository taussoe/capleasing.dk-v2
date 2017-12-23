import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/hero'
import Statement from '../components/statement'
import ResponsiveImage from '../components/responsive-image'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div>
      <Hero height="100vh" />
      <Statement>
        <h2>Vi er i godt selskab</h2>
        <span>
          CapLeasing samarbejder med 3 af de største, ældste og dygtigste
          finansieringsselskaber i branchen. De blander sigikke i vores daglige
          drift. Men netop vores samarbejde med de største og mest etablerede
          selskaber giver ikke alene frihed til os - det giver selvfølgelig også
          dig en tryghed som leasingtager. Og netop fordi leasing kan være svært
          at gennemskue, er det så meget desto mere vigtigt, at alt i
          papirgangen og alt omkring finansiering kører en smule konservativt og
          helt snorlige.
        </span>
      </Statement>
      <div className="container">
        <div className="row spacing">
          <div className="col-md-4">
            <h2>OG BILEN TIL DIG...</h2>
            <span>
              Men hvis vi alligevel ikke har din drømmebil på lager, så går vi i
              gang med at søge i Tyskland – lige indtil den er lige i skabet. Og
              vi stopper ikke før. Det skal være det bedste af det bedste.
            </span>
          </div>
          <div className="col-md-8">
            <ResponsiveImage />
          </div>
        </div>
        <div className="row spacing">
          <div className="col-md-8">
            <ResponsiveImage />
          </div>
          <div className="col-md-4">
            <h2>PLADS TIL DRENGEDRØMME</h2>
            <span>
              CapLeasing bor for enden af Kattegatvej ude i Nordhavn. Lige ved
              siden af vores kontor, ligger en af Danmarks mest eksklusive
              garager proppet med drømmebiler - lige fra gamle Porsche 356
              Speedster, til de nyere Lamborghini. Og det betyder, vi kan
              tilbyde at opbevare dit legetøj uden for sæsonen i et fantastisk
              og eksklusivt miljø sammen med andre bilentusiaster med benzin i
              blodet.
            </span>
          </div>
        </div>
      </div>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </div>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
