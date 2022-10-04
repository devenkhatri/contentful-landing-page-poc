import * as React from "react";
import { graphql } from "gatsby";
import * as Components from "gatsby-theme-landing-page/src/sections";

import Layout from "gatsby-theme-landing-page/src/components/layout";
import Page from "gatsby-theme-landing-page/src/components/page";
import DevDebug from "gatsby-theme-landing-page/src/components/dev-debug";

export default function LandingPage(props) {
  console.log("*******", props);

  let sections = [];
  if (props.data.page) sections = props.data.page.sections;

  return (
    <Layout {...props.data.page}>
      <Page>
        {sections &&
          sections.map((section) => {
            const Component = Components[section.component] || DevDebug;
            return Component ? (
              <Component key={section.id} {...section} />
            ) : null;
          })}
      </Page>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!, $locale: String) {
    page: contentfulLandingPage(
      slug: { eq: $slug }
      node_locale: { eq: $locale }
    ) {
      title
      description
      image {
        file {
          url
        }
      }
      sections {
        id
        component
        heading
        secondaryHeading
        content {
          id
          primaryText {
            childMarkdownRemark {
              html
            }
          }
          secondaryText {
            childMarkdownRemark {
              html
            }
          }
          image {
            gatsbyImageData(layout: CONSTRAINED)
            title
          }
          avatar: image {
            gatsbyImageData(layout: FIXED, width: 48, height: 48)
            title
          }
          links {
            id
            href
            text
          }
        }
      }
    }
  }
`;
