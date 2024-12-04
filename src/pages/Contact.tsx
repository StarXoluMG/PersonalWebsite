import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h1>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('contact.getInTouch')}</h2>
            <p className="text-gray-600 mb-6">{t('contact.description')}</p>
            
            <div className="space-y-4">
              <a
                href="https://github.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Send className="w-4 h-4 mr-2" />
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;