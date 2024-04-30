// player.ts
export type Team = 'M' | 'W';
export type Country = 'Canada' | 'USA';
export type Position = 'Goalie' | 'Defence' | 'Forward';

export type Player = {
  id: number;
  team: Team;
  country: Country;
  firstName: string;
  lastName: string;
  weight: number;
  height: number;
  dateOfBirth: string; // (YYY-MM-DD)
  hometown: string;
  province: string;
  position: Position;
  age: number;
  heightFt: number;
  htln: number;
  bmi: number;
};
