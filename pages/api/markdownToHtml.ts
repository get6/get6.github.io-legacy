import { remark } from 'remark'
import remarkImages from 'remark-images'
import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeStringify from 'rehype-stringify'

const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    .use(remarkParse)
    .use(remarkSlug)
    .use(remarkToc)
    .use(remarkGfm)
    .use(remarkImages)
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Contents' })
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}

export default markdownToHtml
