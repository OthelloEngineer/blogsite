// src/components/layout/NavBar.tsx (or your chosen path)

import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isLastItem?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, isLastItem }) => {
  return (
    <li className={`
      relative group
      ${isLastItem ? '' : 'md:border-r md:border-accent-border/40'}
      transition-all duration-300 ease-out
      hover:md:border-accent-border/70 // Slightly brighten separator on hover of the whole item
    `}>
      <a
        href={href}
        className="
          block relative
          px-4 py-3 md:px-6 md:py-4
          font-inter font-medium text-theme-300
          tracking-normal md:tracking-wider
          text-center
          transition-colors duration-300 ease-out
          hover:text-theme-100
          focus:outline-none focus:text-theme-100
        "
      >
        {children}
        <span
          className="
            absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-[calc(100%-1rem)]
            h-[3px] md:h-[3px]
            bg-accent-border
            transition-all duration-300 ease-out
            group-hover:bg-gradient-to-b group-hover:from-accent-border group-hover:to-transparent
            rounded-t-sm
          "
        ></span>
      </a>
    </li>
  );
};

export const NavBar: React.FC = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#social', label: 'Social media' },
  ];

  return (
    <nav
        className="
            bg-radial-[at_50%_-30%] from-accent-semi to-transparent to-80%
            shadow-md /* Shadow for depth */
            py-4 /* Padding for top and bottom */
            sticky top-0 z-50 /* Sticky positioning */
        "
    >
      <ul className="flex items-stretch justify-center">
        {navItems.map((item, index) => (
          <NavItem
            key={item.href}
            href={item.href}
            isLastItem={index === navItems.length - 1}
          >
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};