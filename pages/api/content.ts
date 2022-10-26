import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const dir = 'content'
const postsDirectory = join(process.cwd(), dir)

const getAllFiles = (dirPath: string, arrayOfFiles: string[]) => {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(join(dirPath, '/', file))
    }
  })

  arrayOfFiles = arrayOfFiles.map((file) =>
    file.replace(join(postsDirectory, '/'), ''),
  )
  return arrayOfFiles
}

export const getPostSlugs = () => getAllFiles(postsDirectory, [])

export const getPostBySlug = (
  slug: string | string[],
  fields: string[] = [],
) => {
  if (typeof slug === 'object') slug = slug.join('/')
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
