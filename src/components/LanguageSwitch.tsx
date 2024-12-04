import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
    >
      <Languages className="w-5 h-5" />
      <span>{i18n.language === 'en' ? '日本語' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitch;