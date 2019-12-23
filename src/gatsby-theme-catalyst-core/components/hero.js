/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
import Img from "gatsby-image"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "absurd-eh-face.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const [isHome] = useContext(HomeContext)
  if (isHome) {
    return (
      <section
        sx={{
          bg: "accent",
          px: 3,
          py: 5,
        }}
      >
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: [
              "1fr",
              "180px minmax(auto, 400px)",
              "200px minmax(400px, 600px)",
              null,
              null,
            ],
            gridGap: 4,
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <Img
            sx={{
              width: ["200px", "100%", null, null, null],
              height: ["200px", "100%", null, null, null],
            }}
            fluid={data.welcomeImage.childImageSharp.fluid}
            alt="Eric Howey"
            imgStyle={{ objectFit: "contain" }}
          />
          <Styled.p
            sx={{
              fontSize: 4,
              m: 0,
              textAlign: ["left", null, "justify", null, null],
            }}
          >
            <Styled.h1 sx={{ fontSize: 4, display: "inline" }}>
              Hello and Welcome!
            </Styled.h1>{" "}
            My name is Eric Howey. I am a web developer and mental health
            therapist. I listen and care.
          </Styled.p>
        </div>
      </section>
    )
  } else {
    return null
  }
}
export default SiteSection