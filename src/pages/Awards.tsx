import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';

const Awards: React.FC = () => {
  const { t } = useTranslation();

  const awards = [
    {
      year: '2021',
      title: 'Markets Watch Award Nominee',
      organization: 'Runner-Up',
      description: t('awards.marketsWatch.description')
    },
    {
      year: '2018',
      title: 'GTSY Innovation Awards',
      organization: 'Team Award',
      description: t('awards.gtsy.description')
    },
    {
      year: '2018',
      title: 'Client Service Award',
      organization: 'Individual Award',
      description: t('awards.clientService.description')
    },
    {
      year: '2016',
      title: 'RMB Nova Stellar',
      organization: 'Team Award',
      description: t('awards.novaStellar.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t('awards.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-2">
                  {award.year} - {award.organization}
                </p>
                <p className="text-gray-700">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;