/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeaderQuery
// ====================================================

export interface HeaderQuery_site_siteMetadata_categories_children {
  name: string | null;
  link: string | null;
}

export interface HeaderQuery_site_siteMetadata_categories {
  name: string | null;
  link: string | null;
  children: (HeaderQuery_site_siteMetadata_categories_children | null)[] | null;
}

export interface HeaderQuery_site_siteMetadata {
  title: string | null;
  categories: (HeaderQuery_site_siteMetadata_categories | null)[] | null;
}

export interface HeaderQuery_site {
  siteMetadata: HeaderQuery_site_siteMetadata | null;
}

export interface HeaderQuery_allMarkdownRemark_group {
  fieldValue: string | null;
  totalCount: number;
}

export interface HeaderQuery_allMarkdownRemark {
  group: HeaderQuery_allMarkdownRemark_group[];
}

export interface HeaderQuery {
  site: HeaderQuery_site | null;
  allMarkdownRemark: HeaderQuery_allMarkdownRemark;
}
