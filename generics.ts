//Работа с обобщенными типовыми переменными

const logIdentity = <T>(arg: T): T => {
    console.log(arg);
    return arg;
};

//Обобщенные типы
//напишем для функции выше интерфейс
interface IIdentity {
    <T>(arg: T): T;
}
const identity: IIdentity = logIdentity;
identity(1);
//identity<string>(1); //ошибка (тип аргумента number не соответствует захваченному типу string

//const plusOne: IIdentity = (a: number): number => a + 1; //ошибка (тип Т - общий и его нельзя привести к конкретному типу number
//const plusOne: IIdentity = <number>(a) => a + 1; //тоже ошибка
//исправим
interface IIdentity2<T> {
    (arg: T): T;
}
const plusTwo: IIdentity2<number> = (a) => a + 2;
const plusThree = (a): IIdentity2<number> => a + 3;

//Обобщенные классы
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

//Ограничения обобщений
const logLength = <T>(arg: T): T => {
    console.log(arg.length); //вот так работать не будет, т.к. у обобщенного типа Т может не быть свойства length
    return arg;
};
//исправим это
interface IHasLength {
    length: number;
}
interface ILengthFunc {
    <T extends IHasLength>(arg: T): T;
}
const logLength2: ILengthFunc = arg => {
    console.log(arg.length);
    return arg;
};
const a = logLength2([1, 2]); //вот так работать будет
const b = logLength2(1); //a так нет

//Использование типов классов в обобщениях

interface IFactory { //паттерн фабрика
    <T>(cls: {new(): T;}): T
}
const factory: IFactory = (cls) => new cls();
factory(1); //работать не будет, т.к. 1 не является объектом с методом new

class SomeClass {}
factory(SomeClass); //а вот так будет;




