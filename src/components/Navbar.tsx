import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Code, GraduationCap, Award, Mail, Clock } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: t('nav.home'), path: '/', icon: Home },
    { label: t('nav.timeline'), path: '/timeline', icon: Clock },
    { label: t('nav.projects'), path: '/projects', icon: Code },
    { label: t('nav.contact'), path: '/contact', icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 mr-2" />}
                  {item.label}
                </Link>
              );
            })}
          </div>
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;