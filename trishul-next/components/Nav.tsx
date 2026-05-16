'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Platforms' },
  { href: '/products', label: 'Systems' },
  { href: '/about', label: 'Company' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' }
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <Link className="nav__brand" href="/">
        <Logo size={26} className="trident" priority />
        <span>
          Trishul Aero<small>Advanced Solutions</small>
        </span>
      </Link>
      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={isActive(l.href) ? 'is-active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link className="nav__cta" href="/contact">
        Request Briefing <span>→</span>
      </Link>
    </nav>
  );
}
