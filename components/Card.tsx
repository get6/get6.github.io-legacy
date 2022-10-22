import Link from 'next/link'
import { PropsWithChildren } from 'react'

type CardProps = {
  href: string
  title: string
  username: string
}

const Card = ({
  href,
  title,
  username,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <a
      className="group block h-24"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="relative flex h-full items-center rounded-3xl border-4 border-black bg-white p-5 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
        <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
          <span className="text-3xl sm:text-3xl" role="img" aria-hidden="true">
            {children}
          </span>
          <p className="mt-1 text-xl font-bold sm:text-xl">{title}</p>
        </div>
        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
          <h3 className="mt-1 text-xl font-bold">{title}</h3>
          <p className="text-lg font-medium leading-relaxed">{username}</p>
        </div>
      </div>
    </a>
  )
}

export default Card
