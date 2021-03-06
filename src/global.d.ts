declare module 'typography-theme-wordpress-2016';

interface GatsbyImageData {
  height: number;
  width: number;
  layout: 'fixed' | 'fullWidth' | 'constrained';
  backgroundColor?: string;
  images: {
    fallback: {
      src: string;
      srcSet: string;
      sizes: string;
    };
    sources: [
      {
        srcSet: string;
        type: string;
        sizes: string;
      }
    ];
  };
}

interface LocationType {
  pathname: string;
}

interface ContentfulAuthor {
  name: string;
  title: string;
  company: string;
  shortBio: {
    childMarkdownRemark: {
      html: string;
    };
  };
  facebook?: string;
  github?: string;
  twitter?: string;
  image: {
    gatsbyImageData: GatsbyImageData;
  };
}

interface ContentfulPost {
  title: string;
  slug: string;
  publishDate: string;
  description: {
    childMarkdownRemark: {
      excerpt?: string;
      html?: string;
    };
  };
  body: {
    childMarkdownRemark: {
      excerpt?: string;
      html?: string;
    };
  };
  heroImage: {
    gatsbyImageData: GatsbyImageData;
  };
  author: ContentfulAuthor;
}
interface AllContentfulPosts {
  nodes: ContentfulPost[];
}

interface SiteDataType {
  allContentfulBlogPost: AllContentfulPosts;
  contentfulBlogPost: ContentfulPost;
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

interface PagePropsType {
  data: SiteDataType;
  location: LocationType;
}
