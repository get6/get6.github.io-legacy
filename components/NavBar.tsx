import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>About me</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
