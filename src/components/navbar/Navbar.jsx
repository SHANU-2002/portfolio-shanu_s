import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NAV_ITEMS = [
    { key: 'home', label: 'Home', href: '#home', offset: 0 },
    { key: 'about', label: 'About', href: '#about', offset: 50 },
    { key: 'experience', label: 'Experience', href: '#experience', offset: 50 },
    { key: 'education', label: 'Education', href: '#education', offset: 50 },
    { key: 'portfolio', label: 'Work', href: '#work', offset: 50 },
    { key: 'contact', label: 'Contact', href: '#contact', offset: 50 },
]

const Navbar = () => {
    const [menu, setMenu] = useState('home')
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const menuRef = useRef()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll while the mobile drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const toggleMenu = () => setMenuOpen((open) => !open)
    const closeMenu = () => setMenuOpen(false)

    return (
        <>
            {/* IMPORTANT: nav-menu-mobile and nav-scrim live OUTSIDE this div on
                purpose. .navbar-scrolled uses backdrop-filter, which turns .navbar
                into the containing block for any position:fixed descendants —
                that was collapsing the drawer's height down to the navbar's own
                height instead of the full viewport. Keeping the drawer as a
                sibling avoids that. */}
            <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
                <a href="#home" className="navbar-mark">
                    <span className="navbar-mark-bracket">{'<'}</span>
                    Shanu&nbsp;S
                    <span className="navbar-mark-bracket">{'/>'}</span>
                </a>

                <ul className="nav-menu-desktop">
                    {NAV_ITEMS.map((item, index) => (
                        <li key={item.key}>
                            <AnchorLink
                                className="anchor-link"
                                offset={item.offset}
                                href={item.href}
                                onClick={() => setMenu(item.key)}
                            >
                                <span className="nav-index">{String(index).padStart(2, '0')}</span>
                                <span className={`nav-label ${menu === item.key ? 'nav-label-active' : ''}`}>
                                    {item.label}
                                </span>
                            </AnchorLink>
                        </li>
                    ))}
                </ul>

                <button
                    className={`nav-mob-toggle ${menuOpen ? 'nav-mob-toggle-open' : ''}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className="nav-mob-bar" />
                    <span className="nav-mob-bar" />
                    <span className="nav-mob-bar" />
                </button>
            </div>

            <ul ref={menuRef} className={`nav-menu-mobile ${menuOpen ? 'nav-menu-mobile-open' : ''}`}>
                {NAV_ITEMS.map((item, index) => (
                    <li key={item.key}>
                        <AnchorLink
                            className="anchor-link"
                            offset={item.offset}
                            href={item.href}
                            onClick={() => { setMenu(item.key); closeMenu() }}
                        >
                            <span className="nav-index">{String(index).padStart(2, '0')}</span>
                            <span className={`nav-label ${menu === item.key ? 'nav-label-active' : ''}`}>
                                {item.label}
                            </span>
                        </AnchorLink>
                    </li>
                ))}
            </ul>

            {menuOpen && <div className="nav-scrim" onClick={closeMenu} />}
        </>
    )
}

export default Navbar
