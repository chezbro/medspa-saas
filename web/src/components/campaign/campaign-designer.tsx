'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { campaignTemplates, type CampaignTemplate } from '@/lib/mock-data';
import { campaignGoals, tones, type CampaignGoal, type Tone } from '@/lib/constants';

const channelOptions = ['SMS', 'Email', 'Instagram'] as const;

type Channel = (typeof channelOptions)[number];

export function CampaignDesigner() {
  const [selectedTemplate, setSelectedTemplate] = useState<CampaignTemplate>(campaignTemplates[0]);
  const [tone, setTone] = useState<Tone>(selectedTemplate.tone);
  const [goal, setGoal] = useState<CampaignGoal>(selectedTemplate.goal);
  const [selectedChannels, setSelectedChannels] = useState<Channel[]>(selectedTemplate.channels as Channel[]);
  const [subjectLine, setSubjectLine] = useState('Winter Botox Party — RSVP by Friday');
  const [smsCopy, setSmsCopy] = useState(
    '❄️ GlowHaus VIPs: RSVP for our Winter Botox Party on Dec 8. Luxe bites, bubbly, and gift bags for the first 20 bookings. Reply YES to save your spot!',
  );
  const [emailCopy, setEmailCopy] = useState(
    'Hi Maya,\n\nWe just opened reservations for our Winter Botox Party. Enjoy private treatment suites, sparkling mocktails, and exclusive bundles. Tap below to RSVP before we fill up.\n\n— GlowHaus Team',
  );

  const toggleChannel = (channel: Channel) => {
    setSelectedChannels((prev) =>
      prev.includes(channel) ? prev.filter((item) => item !== channel) : [...prev, channel],
    );
  };

  const handleTemplateChange = (template: CampaignTemplate) => {
    setSelectedTemplate(template);
    setTone(template.tone);
    setGoal(template.goal);
    setSelectedChannels(template.channels as Channel[]);
    setSubjectLine(`${template.title} — Preview`);
    setSmsCopy(
      '✨ Ready for glowing skin? Reply YES to lock in your exclusive appointment and perks before spots disappear.',
    );
    setEmailCopy(
      'Hi there,\n\nWe saved a spot just for you. Customize this copy or hand it off to our AI to regenerate in seconds.\n\n— MedSpa Engine',
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <Card heading="Templates" description="Start from proven, high-converting med spa playbooks.">
          <div className="grid gap-3">
            {campaignTemplates.map((template) => (
              <button
                key={template.id}
                type="button"
                onClick={() => handleTemplateChange(template)}
                className={`rounded-2xl border p-4 text-left transition ${
                  selectedTemplate.id === template.id
                    ? 'border-brand-300 bg-brand-50'
                    : 'border-slate-200 bg-white hover:border-brand-200'
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">{template.title}</p>
                <p className="text-xs text-slate-500">{template.description}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wide text-brand-600">
                  <span>{template.tone} tone</span>
                  <span>{template.goal}</span>
                  {template.channels.map((channel) => (
                    <span key={channel}>{channel}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </Card>
        <Card heading="Targeting" description="Tell the AI who you want to reach and why.">
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Campaign goal</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {campaignGoals.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setGoal(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      goal === option
                        ? 'border-brand-300 bg-brand-50 text-brand-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Tone</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tones.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      tone === option
                        ? 'border-brand-300 bg-brand-50 text-brand-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Channels</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {channelOptions.map((channel) => (
                  <button
                    key={channel}
                    type="button"
                    onClick={() => toggleChannel(channel)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      selectedChannels.includes(channel)
                        ? 'border-brand-300 bg-brand-50 text-brand-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200'
                    }`}
                  >
                    {channel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card
        heading="Creative studio"
        description="Regenerate, edit, and approve your multichannel campaign in one screen."
        actions={<Button>Regenerate with AI</Button>}
      >
        <div className="space-y-6 text-sm text-slate-600">
          <div className="grid gap-4">
            <Input label="Subject line" value={subjectLine} onChange={(event) => setSubjectLine(event.target.value)} />
            <TextArea
              label="SMS copy"
              value={smsCopy}
              rows={4}
              onChange={(event) => setSmsCopy(event.target.value)}
            />
            <TextArea
              label="Email copy"
              value={emailCopy}
              rows={6}
              onChange={(event) => setEmailCopy(event.target.value)}
            />
          </div>
          <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 p-6 text-center">
            <p className="text-sm font-semibold text-brand-700">Instagram creative</p>
            <p className="mt-2 text-xs text-brand-600">
              Canva or Stable Diffusion mockups render here. Upload custom imagery or prompt the AI.
            </p>
            <Button variant="secondary" className="mt-4">
              Generate promo graphic
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              <p>Goal: {goal}</p>
              <p>Tone: {tone}</p>
              <p>Channels: {selectedChannels.join(', ')}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary">Save draft</Button>
              <Button>Schedule send</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
