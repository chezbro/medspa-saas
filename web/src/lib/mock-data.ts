import type { CampaignGoal, Tone } from '@/lib/constants';

export type CampaignChannel = 'SMS' | 'Email' | 'Instagram';

export interface CampaignTemplate {
  id: string;
  title: string;
  description: string;
  goal: CampaignGoal;
  tone: Tone;
  channels: CampaignChannel[];
}

export const campaignTemplates: CampaignTemplate[] = [
  {
    id: 'winter-botox',
    title: 'Winter Botox Party',
    description: 'Invite VIP clients for a cozy evening of skin rejuvenation with bubbly.',
    goal: 'Seasonal special',
    tone: 'Luxury',
    channels: ['Email', 'Instagram', 'SMS'],
  },
  {
    id: 'fill-this-week',
    title: 'Fill Next Week\'s Openings',
    description: 'Target inactive clients with a friendly reminder about open appointments.',
    goal: 'Fill openings',
    tone: 'Friendly',
    channels: ['SMS', 'Email'],
  },
  {
    id: 'laser-refresh',
    title: 'September Laser Refresh',
    description: 'Spotlight your laser resurfacing package with limited-time bundles.',
    goal: 'Promote services',
    tone: 'Chill',
    channels: ['Email', 'Instagram'],
  },
];

export const performanceMetrics = [
  {
    label: 'Revenue influenced',
    value: '$38,400',
    change: '+28% vs. last month',
  },
  {
    label: 'Bookings from AI campaigns',
    value: '126',
    change: '+18 slots filled',
  },
  {
    label: 'SMS response rate',
    value: '37%',
    change: '+6% vs. med spa benchmark',
  },
];

export const upcomingGaps = [
  {
    day: 'Today',
    slots: [
      { time: '2:00 PM', service: 'HydraFacial - 60 min', idealSegment: 'VIP maintenance' },
      { time: '4:30 PM', service: 'Laser hair removal - 45 min', idealSegment: 'Inactive clients' },
    ],
  },
  {
    day: 'Tomorrow',
    slots: [
      { time: '11:15 AM', service: 'Lip filler - 30 min', idealSegment: 'Instagram leads' },
      { time: '3:00 PM', service: 'Microneedling - 50 min', idealSegment: 'Post-event follow ups' },
    ],
  },
];

export const onboardingTasks = [
  {
    id: 'connect-calendar',
    title: 'Connect Google Calendar',
    description: 'Detect openings and sync booked appointments in real-time.',
    status: 'completed',
  },
  {
    id: 'import-clients',
    title: 'Import clients via CSV',
    description: 'Upload contacts to unlock segmentation, VIP targeting, and automations.',
    status: 'in-progress',
  },
  {
    id: 'complete-a2p',
    title: 'Complete Twilio A2P 10DLC profile',
    description: 'Register your business and campaigns to keep SMS deliverability high.',
    status: 'pending',
  },
];
