/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeaderPageQuery
// ====================================================

export interface HeaderPageQuery_site_siteMetadata_categories_children {
  name: string | null;
  link: string | null;
}

export interface HeaderPageQuery_site_siteMetadata_categories {
  name: string | null;
  link: string | null;
  children: (HeaderPageQuery_site_siteMetadata_categories_children | null)[] | null;
}

export interface HeaderPageQuery_site_siteMetadata {
  title: string | null;
  categories: (HeaderPageQuery_site_siteMetadata_categories | null)[] | null;
}

export interface HeaderPageQuery_site {
  siteMetadata: HeaderPageQuery_site_siteMetadata | null;
}

export interface HeaderPageQuery_allMarkdownRemark_group {
  fieldValue: string | null;
  totalCount: number;
}

export interface HeaderPageQuery_allMarkdownRemark {
  group: HeaderPageQuery_allMarkdownRemark_group[];
}

export interface HeaderPageQuery {
  site: HeaderPageQuery_site | null;
  allMarkdownRemark: HeaderPageQuery_allMarkdownRemark;
}
