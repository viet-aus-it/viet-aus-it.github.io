import { graphql, useStaticQuery } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query AllContentfulBlogPosts {
      allContentfulBlogPost(
        sort: { fields: [publishDate], order: DESC }
        filter: { node_locale: { eq: "en-AU" } }
      ) {
        nodes {
          title
          slug
          publishDate
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  return data.allContentfulBlogPost.nodes;
};

export default useBlogPosts;
