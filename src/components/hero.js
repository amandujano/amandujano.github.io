import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ImageBackground = styled(BackgroundImage)`
  background-image: url("/images/background-title.jpg");
  background-position: top 60% center;
  background-size: cover;
  height: 30vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled("div")`
  #background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%; Link, 
  justify-content: flex-end;
  padding: 0 calc((100vw - 950px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 2px 2px 4px #000000;
    font-size: 2.25rem;
    color: #a9a9a9;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "23461532884_3e1d860dca_o.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>Angel Mandujano</h1>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
