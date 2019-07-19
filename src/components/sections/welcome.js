/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import AnchorLink from "react-anchor-link-smooth-scroll"


const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "images/absurd-lightbulb-head.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
        }
      }
    }
    `)
    return (
            <section
            sx={{
              backgroundColor: "primary",
              py: 3,
              px: 0,
              marginTop: ["40px", "60px", null]
            }}
            >
              <div
              sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: ["1fr 60%", "1fr 1fr", null],
              gridGap: "1rem",
              maxWidth: "1024px",
              height: ["calc(100vh - 100px)","calc(100vh - 120px)", null],
              margin: "0 auto",
              padding: "0 1rem",
              }}
              >
                <Img
                sx={{
                gridColumn: ["1 / -1", "1 / 2", null],
                gridRow: ["1 / 2", "1 / -1", null]
                }}
                fluid={data.welcomeImage.childImageSharp.fluid} 
                alt="Arrangement of lightbulbs" 
                imgStyle={{ objectFit: 'contain' }} 
                />
                <div
                sx={{
                gridColumn: ["1 / -1", "2 / 3", null],
                gridRow: ["2 / 3", "1 / -1", null],
                alignSelf: "center",
                justifySelf: "center"
                }}
                >
                  <h1>Bespoke websites.<br />Listening and caring.</h1>
                  <AnchorLink
                  sx={{
                  color: "white",
                  textDecoration: "none",
                  border: "2px solid secondary",
                  backgroundColor: "secondary",
                  padding: "0.5rem 0.8rem",
                  borderRadius: "24px",
                  transitionDuration: "0.3s",
                  letterSpacing: "1px",

                  ":hover": {
                    opacity: "0.8"
                  }
                  }}
                  href="#contact" 
                  offset='80'
                  >
                  Talk to me
                  </AnchorLink>
                </div>
            </div>
        </section>
    )
}

export default siteSection
