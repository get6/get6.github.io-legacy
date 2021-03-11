/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEOPageQuery
// ====================================================

export interface SEOPageQuery_site_siteMetadata_author {
  name: string | null;
  summary: string | null;
}

export interface SEOPageQuery_site_siteMetadata_social {
  twitter: string | null;
  github: string | null;
  gmail: string | null;
  facebook: string | null;
  instagram: string | null;
}

export interface SEOPageQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  author: SEOPageQuery_site_siteMetadata_author | null;
  keywords: (string | null)[] | null;
  siteUrl: string | null;
  social: SEOPageQuery_site_siteMetadata_social | null;
}

export interface SEOPageQuery_site {
  siteMetadata: SEOPageQuery_site_siteMetadata | null;
}

export interface SEOPageQuery {
  site: SEOPageQuery_site | null;
}
