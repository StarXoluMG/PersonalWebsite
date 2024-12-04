import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '../components/Timeline';
import { TimelineEvent } from '../types';

const Education: React.FC = () => {
  const { t } = useTranslation();

  const education: TimelineEvent[] = [
    {
      year: '2023 - 2024',
      title: 'MBA',
      organization: 'GLOBIS University',
      description: t('education.mba.description'),
      type: 'education'
    },
    {
      year: '2010 - 2013',
      title: 'MSc in Computer Science',
      organization: 'University of Cape Town',
      description: t('education.msc.description'),
      type: 'education'
    },
    {
      year: '2009',
      title: 'BSc Honors in Computer Science',
      organization: 'University of Cape Town',
      description: t('education.bscHons.description'),
      type: 'education'
    },
    {
      year: '2009',
      title: 'BSc in IT',
      organization: 'University of Cape Town',
      description: t('education.bsc.description'),
      type: 'education'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t('education.title')}</h1>
        <Timeline events={education} />
      </div>
    </div>
  );
};

export default Education;