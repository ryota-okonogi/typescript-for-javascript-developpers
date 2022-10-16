export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude
// type 〇〇 = Exclude<全体のユニオン型, 全体のユニオン型>;
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // Function(type NunFunctionType の別定義方法)

// Exract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;

// NunNullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
