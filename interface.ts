//ПРОВЕРКИ НА ЛИШНИЕ СВОЙСТВА
interface IParams {
    a?: number,
    b?: string
}

const someFunc = (params: IParams): void => {
    console.log(params);
};

// someFunc({c: '123'}); //ошибка "c отсутствует в IParams"
someFunc({c: 1} as IParams); // 1 способ обойти данную проверку - привести объект к типу IParams

//также можно добавить строковый индекс
interface IParams2 {
    a?: number,
    b?: string,
    [paramName: string]: any
}

const someFunc2 = (params: IParams2): void => {
    console.log(params);
};

someFunc2({c: 1, d: 2});

//фУНКЦИОНАЛЬНЫЕ ТИПЫ
interface IFunc {
    (a: number, b: string): boolean
}

// const someFunc3: IFunc = (a, b) => { //ошибка возвращаемое значение не boolean
//     console.log(a, b);
//     return a;
// };

const someFunc3: IFunc = (a, b) => {
    console.log(a, b);
    return false;
};

someFunc3(1, '2');

//ИНДЕКСИРУЕМЫЕ ТИПЫ
interface StringArray {
    [index: number]: string
}
const arr: StringArray = ['1', '2', '3'];
// const arr2: StringArray = [1, 2, 3]; // ошибка тип number не соответсвует string

interface NumberObject {
    [key: string]: number
}
const obj1: NumberObject = {a: 1, b: 2};
// const obj2: NumberObject = {a: '1', b: '2'}; // ошибка тип string не соответствует типу number

// interface NumberObject2 { //ошибка name типа string не соответствует типу number
//     [key: string]: number;
//     name: string
// }

interface IReadonlyArray {
    readonly [index: number]: string;
}

const arr4: IReadonlyArray = ['1', '2'];
// arr4[1] = '3'; // ошибка только для чтения

//ТИПЫ КЛАССОВ
interface ISomeInterface {
    a: number,
    b: string,
    c(d: number): string;
}

class Some implements ISomeInterface{
    a: 1;
    b: '2';
    c(d: number) {
        return String(d);
    }
}

// class Some2 implements ISomeInterface{ // ошибки: a должно быть типа number, аргументы d метода с должен быть типа number, b отсутствует
//     a: '2';
//     c(d: string) {
//         return +d;
//     }
// }

//РАСШИРЕНИЕ ИНТЕРФЕЙСОВ
interface I1 {
    a: string
}

interface I2 {
    b: number
}

interface I3 extends I1, I2 {
    c(): boolean
}

class C1 implements I3 {
    a: '1';
    b: 2;
    c() {return true}
}

// class C2 implements I3 { //ошибки: a должно быть типа string, b отсутствует, c возвращает number, а не boolean
//     a: 1;
//     c() {return 1}
// }

//ГИБРИДНЫЕ ТИПЫ
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

