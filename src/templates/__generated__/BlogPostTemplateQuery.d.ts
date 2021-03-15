/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostTemplateQuery
// ====================================================

export interface BlogPostTemplateQuery_site_siteMetadata_author {
  name: string | null;
}

export interface BlogPostTemplateQuery_site_siteMetadata {
  title: string | null;
  author: BlogPostTemplateQuery_site_siteMetadata_author | null;
}

export interface BlogPostTemplateQuery_site {
  siteMetadata: BlogPostTemplateQuery_site_siteMetadata | null;
}

export interface BlogPostTemplateQuery_markdownRemark_frontmatter_image_childImageSharp_resize {
  src: string | null;
  height: number | null;
  width: number | null;
}

export interface BlogPostTemplateQuery_markdownRemark_frontmatter_image_childImageSharp {
  resize: BlogPostTemplateQuery_markdownRemark_frontmatter_image_childImageSharp_resize | null;
}

export interface BlogPostTemplateQuery_markdownRemark_frontmatter_image {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: BlogPostTemplateQuery_markdownRemark_frontmatter_image_childImageSharp | null;
}

export interface BlogPostTemplateQuery_markdownRemark_frontmatter {
  title: string | null;
  date: any | null;
  description: string | null;
  image: BlogPostTemplateQuery_markdownRemark_frontmatter_image | null;
}

export interface BlogPostTemplateQuery_markdownRemark {
  id: string;
  excerpt: string | null;
  html: string | null;
  tableOfContents: string | null;
  frontmatter: BlogPostTemplateQuery_markdownRemark_frontmatter | null;
}

export interface BlogPostTemplateQuery_allMarkdownRemark_edges_node_fields {
  slug: string | null;
}

export interface BlogPostTemplateQuery_allMarkdownRemark_edges_node_frontmatter {
  title: string | null;
  date: any | null;
}

export interface BlogPostTemplateQuery_allMarkdownRemark_edges_node {
  fields: BlogPostTemplateQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: BlogPostTemplateQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface BlogPostTemplateQuery_allMarkdownRemark_edges {
  node: BlogPostTemplateQuery_allMarkdownRemark_edges_node;
}

export interface BlogPostTemplateQuery_allMarkdownRemark {
  edges: BlogPostTemplateQuery_allMarkdownRemark_edges[];
}

export interface BlogPostTemplateQuery {
  site: BlogPostTemplateQuery_site | null;
  markdownRemark: BlogPostTemplateQuery_markdownRemark | null;
  allMarkdownRemark: BlogPostTemplateQuery_allMarkdownRemark;
}

export interface BlogPostTemplateQueryVariables {
  slug: string;
  tag: string;
}
