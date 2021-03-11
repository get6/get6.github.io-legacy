/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BioQuery
// ====================================================

export interface BioQuery_avatar_childImageSharp_fixed {
  base64: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
}

export interface BioQuery_avatar_childImageSharp {
  fixed: BioQuery_avatar_childImageSharp_fixed | null;
}

export interface BioQuery_avatar {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: BioQuery_avatar_childImageSharp | null;
}

export interface BioQuery_site_siteMetadata_author {
  name: string | null;
  summary: string | null;
}

export interface BioQuery_site_siteMetadata {
  author: BioQuery_site_siteMetadata_author | null;
}

export interface BioQuery_site {
  siteMetadata: BioQuery_site_siteMetadata | null;
}

export interface BioQuery {
  avatar: BioQuery_avatar | null;
  site: BioQuery_site | null;
}
