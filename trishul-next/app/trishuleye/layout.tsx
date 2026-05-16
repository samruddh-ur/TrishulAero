import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trishuleye — Experience the Panel',
  description:
    'Trishuleye — one pane of glass for every airborne asset. Live fleet operations dashboard, real-time mission video, and AI-driven detections from every Trishul Aero platform on the network.'
};

export default function TrishuleyeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
