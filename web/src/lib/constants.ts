export const subscriptionPlans = [
  {
    name: 'Starter',
    price: 99,
    description: 'For solo med spas getting started with automated marketing.',
    features: [
      '1 user seat',
      '1,000 SMS or emails per month',
      '10 Instagram/Facebook posts per month',
      'AI copy & image generation',
      'Gap detection for one Google Calendar',
    ],
  },
  {
    name: 'Pro',
    price: 249,
    description: 'For growing teams that need deeper analytics and integrations.',
    features: [
      '3 user seats',
      '5,000 SMS or emails per month',
      '50 Instagram/Facebook posts per month',
      'Advanced analytics and segmentation',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 499,
    description: 'For multi-location groups that need unlimited scalability.',
    features: [
      'Unlimited seats & locations',
      'Unlimited SMS, email & social posts',
      'Dedicated account manager',
      'Custom integrations (Outlook, Mindbody, Vagaro)',
      'White-label options',
    ],
  },
];

export const tones = ['Friendly', 'Luxury', 'Chill'] as const;
export const campaignGoals = ['Fill openings', 'Promote services', 'Seasonal special'] as const;

export type Tone = (typeof tones)[number];
export type CampaignGoal = (typeof campaignGoals)[number];
