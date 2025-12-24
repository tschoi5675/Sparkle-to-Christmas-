
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface FestiveMessage {
  text: string;
  type: 'wish' | 'tip' | 'fact';
}
