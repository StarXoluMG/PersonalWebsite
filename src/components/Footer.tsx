import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">{t('nav.home')}</Link></li>
              <li><Link to="/experience" className="hover:text-blue-400">{t('nav.experience')}</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400">{t('nav.projects')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.more')}</h3>
            <ul className="space-y-2">
              <li><Link to="/education" className="hover:text-blue-400">{t('nav.education')}</Link></li>
              <li><Link to="/awards" className="hover:text-blue-400">{t('nav.awards')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.connect')}</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/StarXoluMG" target="_blank" className="hover:text-blue-400">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/xoluqobo-mkhwanazi-1009493b/" target="_blank" className="hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:xolu.mkhwanazi@gmail.com" className="hover:text-blue-400">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.location')}</h3>
            <p>{t('footer.locationText')}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;