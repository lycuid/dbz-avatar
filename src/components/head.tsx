import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface HeadProps {
  description?: string,
}

const Head: React.FC<HeadProps & HelmetProps> = ({
  description = '',
  ...props
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet {...props}>
      <title>{props.title || ''}</title>
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={props.title || ''} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={site.siteMetadata.author} />
      <meta name='twitter:title' content={props.title || ''} />
      <meta name='twitter:description' content={metaDescription} />
    </Helmet>
  );
}

export default Head;
