/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TagsTemplateQuery
// ====================================================

export interface TagsTemplateQuery_allMarkdownRemark_edges_node_fields {
  slug: string | null;
}

export interface TagsTemplateQuery_allMarkdownRemark_edges_node_frontmatter {
  title: string | null;
  date: any | null;
}

export interface TagsTemplateQuery_allMarkdownRemark_edges_node {
  fields: TagsTemplateQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: TagsTemplateQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface TagsTemplateQuery_allMarkdownRemark_edges {
  node: TagsTemplateQuery_allMarkdownRemark_edges_node;
}

export interface TagsTemplateQuery_allMarkdownRemark {
  totalCount: number;
  edges: TagsTemplateQuery_allMarkdownRemark_edges[];
}

export interface TagsTemplateQuery_site_siteMetadata {
  title: string | null;
}

export interface TagsTemplateQuery_site {
  siteMetadata: TagsTemplateQuery_site_siteMetadata | null;
}

export interface TagsTemplateQuery {
  allMarkdownRemark: TagsTemplateQuery_allMarkdownRemark;
  site: TagsTemplateQuery_site | null;
}

export interface TagsTemplateQueryVariables {
  tag?: string | null;
}
