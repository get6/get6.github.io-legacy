/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_site_siteMetadata_categories_children {
  name: string | null;
  link: string | null;
}

export interface IndexPageQuery_site_siteMetadata_categories {
  name: string | null;
  link: string | null;
  children: (IndexPageQuery_site_siteMetadata_categories_children | null)[] | null;
}

export interface IndexPageQuery_site_siteMetadata {
  title: string | null;
  categories: (IndexPageQuery_site_siteMetadata_categories | null)[] | null;
}

export interface IndexPageQuery_site {
  siteMetadata: IndexPageQuery_site_siteMetadata | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_fields {
  slug: string | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_frontmatter {
  date: any | null;
  title: string | null;
  description: string | null;
  tags: (string | null)[] | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node {
  excerpt: string | null;
  fields: IndexPageQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: IndexPageQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges {
  node: IndexPageQuery_allMarkdownRemark_edges_node;
}

export interface IndexPageQuery_allMarkdownRemark {
  edges: IndexPageQuery_allMarkdownRemark_edges[];
}

export interface IndexPageQuery {
  site: IndexPageQuery_site | null;
  allMarkdownRemark: IndexPageQuery_allMarkdownRemark;
}
