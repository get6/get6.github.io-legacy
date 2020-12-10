// 오늘 날짜
const today = new Date()
// 최근 글 기준일
const limitNewPostDay = 14
// 최근 작성된 게시글인지 확인
export const isNewPost = date => {
  // json 형식으로 오는 객체 중에 node가 없는 형식이 있음
  if (!date) {
    return false
  }
  // post.frontmatter.date
  const postDate = new Date(date.split(",")[0])
  return (
    Math.round(Math.abs((postDate - today) / (24 * 60 * 60 * 1000))) <=
    limitNewPostDay
  )
}

// Array를 무작위로 섞기
export const shuffle = array => {
  return array
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
}

// Key로 LocalStorage에서 찾기
export const getInLocal = key => {
  try {
    const data = localStorage.getItem(key)
    return JSON.parse(data || {})
  } catch (error) {
    return {}
  }
}

// Key로 LocalStorage에 데이터 저장
export const setInLocal = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (error) {
    return false
  }
}
