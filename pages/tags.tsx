import { NextPage } from 'next'
import { getAllPosts } from './api/content'
import Post from '../types/post'

type Props = {
  allTags: Post[]
}

const Tags: NextPage<Props> = ({ allTags }) => {
  return <></>
}

export default Tags

export const getStaticProps = async () => {
  const allTags = getAllPosts(['tags'])

  return {
    props: { allTags },
  }
}
