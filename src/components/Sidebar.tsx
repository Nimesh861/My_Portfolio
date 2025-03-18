import React, { useState } from 'react';
import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
  GraduationCap,
  Code
} from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const Sidebar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nav items including Projects
  const navItems: NavItem[] = [
    { id: 'home', icon: <Home className="nav-icon" />, label: 'Home' },
    { id: 'about', icon: <User className="nav-icon" />, label: 'About' },
    { id: 'education', icon: <GraduationCap className="nav-icon" />, label: 'Education' },
    { id: 'skills', icon: <Code className="nav-icon" />, label: 'Skills' },
    { id: 'experience', icon: <Briefcase className="nav-icon" />, label: 'Experience' },
    { id: 'projects', icon: <Code className="nav-icon" />, label: 'Projects' },
    { id: 'contact', icon: <Mail className="nav-icon" />, label: 'Contact' },
  ];

  const socialItems: NavItem[] = [
    { id: 'github', icon: <Github className="nav-icon" />, label: 'GitHub' },
    { id: 'linkedin', icon: <Linkedin className="nav-icon" />, label: 'LinkedIn' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-dark rounded-md"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-light" />
          ) : (
            <Menu className="w-6 h-6 text-light" />
          )}
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 h-full w-16 bg-dark border-r border-gray-800 hidden md:flex flex-col items-center py-8 z-50">
        <div className="mb-12">
          <Logo />
        </div>

        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex items-center justify-center"
            >
              {item.icon}
              <span className="absolute left-14 bg-dark text-light px-2 py-1 rounded text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-700">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col items-center space-y-6">
          {socialItems.map((item) => (
            <a
              key={item.id}
              href={
                item.id === 'github'
                  ? 'https://github.com/Nimesh861'
                  : 'http://www.linkedin.com/in/patel--nimesh'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center"
            >
              {item.icon}
              <span className="absolute left-14 bg-dark text-light px-2 py-1 rounded text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-700">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-darker z-40 md:hidden flex flex-col items-center justify-center">
          <div className="mb-8">
            <Logo />
          </div>

          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 text-lg"
              >
                {item.icon}
                <span className="text-light">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-12 flex space-x-6">
            {socialItems.map((item) => (
              <a
                key={item.id}
                href={
                  item.id === 'github'
                    ? 'https://github.com/Nimesh861'
                    : 'http://www.linkedin.com/in/patel--nimesh'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                {item.icon}
                <span className="text-light">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}; 

export default Sidebar;
