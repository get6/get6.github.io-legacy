import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto pt-10">{children}</div>
}

export default Container
