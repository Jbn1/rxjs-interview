export interface IFrequency {
  id: number;
  caption: string;
  multiplier: number;
}

export const frequenciesList: IFrequency[] = [
  { id: 1, caption: 'Annually', multiplier: 1 },
  { id: 2, caption: 'Monthly', multiplier: 1.09 },
  { id: 3, caption: 'Weekly', multiplier: 1.15 },
  { id: 4, caption: 'Daily' , multiplier: 1.3 }
];
