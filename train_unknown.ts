let id: unknown;
id = 1;
id = 'str';
id = [1, 2, 3];
id = {a: 1};
id = undefined;
id = null;

let user1: any;
user1.a = 1;
let user2: unknown = user1;
// user2.a = 2; //ошибка над типом unknown запрещена

type T0 = any & unknown; // type T0 = any
type T1 = number & unknown; // type T1 = number
type T2 = string & unknown; // type T2 = string
type T3 = boolean & unknown; // type T3 = boolean
type T4 = null & unknown; // type T4 = null
type T5 = undefined & unknown; // type T5 = undefined
type T6 = void & unknown; // type T6 = void
type T7 = never & unknown; // type T7 = never
type T8<T> = T & unknown; // type T8 = T
type T9 = unknown & unknown; // type T9 = unknown

type T10 = any | unknown; // type T10 = any
type T11 = number | unknown; // type T11 = unknown
type T12 = string | unknown; // type T12 = unknown
type T13 = boolean | unknown; // type T13 = unknown
type T14 = null | unknown; // type T14 = unknown
type T15 = undefined | unknown; // type T15 = unknown
type T16 = void | unknown; // type T16 = unknown
type T17 = never | unknown; // type T17 = unknown
type T18<T> = T | unknown; // type T18 = unknown
type T19 = unknown | unknown; // type T19 = unknown