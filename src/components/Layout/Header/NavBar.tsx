/*
 * @Date: 2023-01-11 14:20:45
 * @LastEditors: Peelson github@peelson.cn
 * @LastEditTime: 2023-01-13 19:21:35
 * @FilePath: /morethan-log/src/components/Layout/Header/NavBar.tsx
 */
import Link from 'next/link'

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: 'About', to: '/about' },
    { id: 2, name: 'Memos', to: '/memos' } 
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black dark:text-gray-50 nav"
          >
            <Link href={link.to}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
