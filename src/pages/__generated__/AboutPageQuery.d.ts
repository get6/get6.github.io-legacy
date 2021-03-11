/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_avatar_childImageSharp_fixed {
  base64: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
}

export interface AboutPageQuery_avatar_childImageSharp {
  fixed: AboutPageQuery_avatar_childImageSharp_fixed | null;
}

export interface AboutPageQuery_avatar {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: AboutPageQuery_avatar_childImageSharp | null;
}

export interface AboutPageQuery_site_siteMetadata_social {
  twitter: string | null;
  github: string | null;
  gmail: string | null;
  facebook: string | null;
  instagram: string | null;
}

export interface AboutPageQuery_site_siteMetadata_author {
  name: string | null;
  summary: string | null;
}

export interface AboutPageQuery_site_siteMetadata {
  title: string | null;
  social: AboutPageQuery_site_siteMetadata_social | null;
  author: AboutPageQuery_site_siteMetadata_author | null;
}

export interface AboutPageQuery_site {
  siteMetadata: AboutPageQuery_site_siteMetadata | null;
}

export interface AboutPageQuery {
  avatar: AboutPageQuery_avatar | null;
  site: AboutPageQuery_site | null;
}
