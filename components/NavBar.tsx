import Link from 'next/link'
import { useRouter } from 'next/router'

type Menu = {
  name: string
  href: string
}

const NavBar = () => {
  const router = useRouter()

  const menus: Menu[] = [
    { name: 'Categories', href: '/categories' },
    { name: 'Tags', href: '/tags' },
    { name: 'Books', href: '/books' },
    { name: 'About me', href: '/about' },
  ]

  return (
    <nav className="absolute flex w-full justify-between py-4">
      <div className="ml-20 mr-40 flex-none">
        <Link href={'/'}>
          <a className="text-lg font-bold">🌎 Sunhwang&apos;s blog</a>
        </Link>
      </div>
      <ul className="flex flex-auto flex-row justify-evenly">
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
    </nav>
  )
}

export default NavBar
