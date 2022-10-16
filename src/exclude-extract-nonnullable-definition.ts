export {};

// type Exclude<T, U> = T extends U ? never : T;
type MyExclude = DebugType;

  // | (string extends string | number ? never : string)
  // | (number extends string | number ? never : number)
  // | (DebugType extends string | number ? never : DebugType);
  // type MyExclude = never | never | DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude
// type 〇〇 = Exclude<全体のユニオン型, 全体のユニオン型>;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

// Exract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// NunNullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
