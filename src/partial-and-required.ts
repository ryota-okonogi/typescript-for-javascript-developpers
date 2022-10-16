export {};

type Profile = {
  name: string; // 必須
  age?: number; // オプショナル
  zipCode: number; // 必須
};

// Partial = オプショナルにするための便利な型
type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
