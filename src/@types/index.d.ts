type Post = {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
      description: string
      tags: string[]
    }
  }
}

type PageProps<TData> = {
  data: TData
} & MatchRenderProps<{}>

class SnowSpan extends HTMLSpanElement {
  constructor() {
    super()
    this.posX = 0
    this.posY = 0
    this.sink = 0
    this.size = 0
  }
  public posX: number
  public posY: number
  public sink: number
  public size: number
}

customElements.define("snow-span", SnowSpan, { extends: "span" })

declare module "*.png"
