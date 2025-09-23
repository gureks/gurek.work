export interface NudgeConfig {
  id: string;
  messageParts: Array<
    | { type: 'text'; text: string }
    | { type: 'link'; text: string; href: string }
    | { type: 'emoji'; text: string }
  >;
  dismissible?: boolean;
  ariaLabel?: string;
  role?: 'status' | 'alert';
}

export const nudgeConfig: NudgeConfig = {
  id: 'build-in-public',
  messageParts: [
    { type: 'emoji', text: '🎴️' },
    { type: 'text', text: 'Shuffling the deck!🃏Witness the hand I\'m playing as I ' },
    { type: 'link', text: 'build in public', href: 'https://letmegooglethat.com/?q=building+in+public/' },
    { type: 'text', text: '. 🔨' }
  ],
  dismissible: false,
  role: 'status',
  ariaLabel: 'Announcement: Building in public'
};

export default nudgeConfig;
