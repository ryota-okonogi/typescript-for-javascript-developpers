export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile; // keyofの正体

type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;
