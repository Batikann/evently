'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
  const pathName = usePathname()
  return (
    <ul className=" flex flex-col md:flex-row gap-5">
      {headerLinks.map((link) => (
        <li
          key={link.label}
          className={`${
            pathName === link.route
              ? 'text-blue-500 p-medium-16 whitespace-nowrap'
              : ''
          }`}
        >
          <Link href={link.route}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}
export default NavItems
