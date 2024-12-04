import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t('projects.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={`https://source.unsplash.com/800x600/?technology,${project}`}
                alt={t(`projects.project${project}.title`)}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t(`projects.project${project}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`projects.project${project}.description`)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex space-x-2">
                    {['React', 'TypeScript', 'Node.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;