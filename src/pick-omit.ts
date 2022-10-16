export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

/*
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
*/
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type smallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
