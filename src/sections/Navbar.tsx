import Link from 'next/link'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'

const RESUME_LINK = '/resume.pdf'
const LOGO_LINK = '/resume.pdf'

const SECTION_LINKS = [
  {
    name: 'About',
    link: '/#about'
  },
  { name: 'Experience', link: '/#experience' },
  { name: 'Work', link: '/#work' },
  { name: 'Contact', link: '/#contact' }
]

function Navbar() {
  const [navBarVisible, setNavBarVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0.05 ? setNavBarVisible(true) : setNavBarVisible(false)
    })
  })
  return (
    <nav>
      <div className={`wrapper ${navBarVisible ? 'blur-nav' : ''}`}>
        <div className="brand">
          <Link href={LOGO_LINK}>
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {SECTION_LINKS.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-items-button">
            <Button text="Resume" link={RESUME_LINK}></Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
