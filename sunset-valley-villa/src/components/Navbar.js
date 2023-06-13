import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-200 px-4 py-2 sticky top-0 text-black font-bold">
    <ul className="flex justify-between">
        <li>
            <p>Sunset Valley Villa</p>
        </li>
        <li>
            <ul className="flex justify-between space-x-8">
                <li>
                    <Link className="" href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="" href="/about">
                        Tour The Villa
                    </Link>
                </li>
                <li>
                    <Link className="" href="/contact">
                        Tour The Region
                    </Link>
                </li>
            </ul>
        </li>
    </ul>
    </nav>
  )
}

export default Navbar
