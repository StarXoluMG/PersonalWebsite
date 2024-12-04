import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '../components/Timeline';
import { TimelineEvent } from '../types';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences: TimelineEvent[] = [
    {
      year: '2022 - 2023',
      title: t('experience.eMedia.title'),
      organization: 'eMedia Holdings',
      description: t('experience.eMedia.description'),
      type: 'work'
    },
    {
      year: '2015 - 2022',
      title: t('experience.rmb.title'),
      organization: 'Rand Merchant Bank',
      description: t('experience.rmb.description'),
      type: 'work'
    },
    {
      year: '2024',
      title: t('experience.hattori.title'),
      organization: 'Hattori Group',
      description: t('experience.hattori.description'),
      type: 'work'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t('experience.title')}</h1>
        <Timeline events={experiences} />
      </div>
    </div>
  );
};

export default Experience;