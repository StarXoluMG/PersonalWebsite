import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">{t('home.title')}</h1>
          <p className="text-xl text-gray-600 mb-8">{t('home.subtitle')}</p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Link
              to="/files/cv.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('home.downloadCV')}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t('home.contactMe')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('home.expertise.development')}</h3>
              <p className="text-gray-600">{t('home.expertise.developmentDesc')}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('home.expertise.business')}</h3>
              <p className="text-gray-600">{t('home.expertise.businessDesc')}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('home.expertise.innovation')}</h3>
              <p className="text-gray-600">{t('home.expertise.innovationDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;