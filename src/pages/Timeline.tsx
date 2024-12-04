import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '../components/Timeline';
import { TimelineEvent } from '../types';
import { Clock } from 'lucide-react';

const TimelinePage: React.FC = () => {
  const { t } = useTranslation();

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2024',
      title: t('experience.hattori.title'),
      organization: 'Hattori Group',
      description: t('experience.hattori.description'),
      type: 'work'
    },
    {
      year: '2023 - 2024',
      title: 'MBA',
      organization: 'GLOBIS University',
      description: t('education.mba.description'),
      type: 'education'
    },
    {
      year: '2022 - 2023',
      title: t('experience.eMedia.title'),
      organization: 'eMedia Holdings',
      description: t('experience.eMedia.description'),
      type: 'work'
    },
    {
      year: '2021',
      title: 'Markets Watch Award Nominee',
      organization: 'Runner-Up',
      description: t('awards.marketsWatch.description'),
      type: 'award'
    },
    {
      year: '2018',
      title: 'GTSY Innovation Awards',
      organization: 'Team Award',
      description: t('awards.gtsy.description'),
      type: 'award'
    },
    {
      year: '2018',
      title: 'Client Service Award',
      organization: 'Individual Award',
      description: t('awards.clientService.description'),
      type: 'award'
    },
    {
      year: '2015 - 2022',
      title: t('experience.rmb.title'),
      organization: 'Rand Merchant Bank',
      description: t('experience.rmb.description'),
      type: 'work'
    },
    {
      year: '2016',
      title: 'RMB Nova Stellar',
      organization: 'Team Award',
      description: t('awards.novaStellar.description'),
      type: 'award'
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
        <div className="flex items-center justify-center mb-12">
          <Clock className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-center">Journey Timeline</h1>
        </div>
        
        <div className="mb-8 flex justify-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Work Experience</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Education</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Awards</span>
          </div>
        </div>

        <Timeline events={timelineEvents} />
      </div>
    </div>
  );
};

export default TimelinePage;