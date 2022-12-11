import Link from 'next/link'
import { useRouter } from 'next/router'

type Menu = {
  name: string
  href: string
}

const NavBar = () => {
  const router = useRouter()

  const menus: Menu[] = [
    // { name: 'Series', href: '/series' },
    { name: 'Tags', href: '/tags' },
    // { name: 'Books', href: '/books' },
    { name: 'About me', href: '/about' },
  ]

  return (
    <nav className="absolute w-full pt-3">
      <div className="container mx-auto flex flex-wrap">
        <Link href={'/'}>
          <a className="w-2/6 text-lg font-bold">🌎 Sunhwang&apos;s blog</a>
        </Link>
        {/* 4개 이상일 때 쓰는 속성 */}
        {/* <ul className="flex grow justify-between"> */}
        <ul className="flex grow justify-end space-x-10">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href}>
                <a
                  className={`hover:underline hover:underline-offset-8 ${
                    router.asPath == menu.href
                      ? 'underline underline-offset-8'
                      : ''
                  }`}
                >
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
