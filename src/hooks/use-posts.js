import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx{
                nodes{
                    frontmatter{
                        title
                        author
                        slug
                        date
                        image {
                            sharp: childImageSharp {
                                fluid(
                                    maxWidth:100
                                    maxHeight: 100
                                    duotone: { shadow: "#5F9EA0", highlight: "ddbbff" }
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    `);
    return  data.allMdx.nodes.map( post => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        date: post.frontmatter.date,
        slug: post.frontmatter.slug,
        image: post.frontmatter.image,
        excerpt: post.excerpt,
    }));
};

export default usePosts;
