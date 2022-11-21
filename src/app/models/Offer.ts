export interface IOffer {
  id: number;
  caption: string;
  cost: number;
}

export const offersList: IOffer[] = [
  { id: 1, caption: 'Complete Plan + Upgrade', cost: 200 },
  { id: 2, caption: 'Complete Plan (no Upgrade)', cost: 180 },
  { id: 3, caption: 'Standard Plan', cost: 135 },
  { id: 4, caption: 'Basic Plan', cost: 100 }
];
