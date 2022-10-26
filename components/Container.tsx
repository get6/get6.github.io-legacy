import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container
