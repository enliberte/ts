/*
Совместимость типов в TypeScript основывается на структурной типизации.
Структурная типизация — это способ выявления отношений типов на основании исключительно состава их членов
 */
class A {
    name: string;
}
class B {
    name: string;
}
class C {
    age: number;
}
let a: A; //при объявлении переменной a указываем, что она должна быть типа A
a = new B(); //но ошибки нет, т.к. структуры типов А и B одинаковы
a = new C(); //вот так уже работать не будет

//x совместимо с y, если y имеет по крайней мере те же самые члены, что и x
interface ISome {
    a: string;
    b: number;
}
let x: ISome = {a: 'Buy', b: 1};
let y = {a: 'Hey', b: 5, c: [1, 2, 3]}; //выведенный тип для y - {a: string, b: number, c: number[]}
x = y; //компилятор предупреждает, о том, что x и y имеют разные типы, но операция допустима
x.a;
x.b;
x.c; //при этом свойство c объекта y при присваивании в x станет недоступно

//Сравнение двух функций
/*
Чтобы проверить, допустимо ли присваивание x к y, сначала просматривается список параметров.
Для каждого параметра функции x у функции y должен быть соответствующий параметр совместимого типа.
Имена параметров не принимаются во внимание — важны лишь типы.
 */
let func1: (a: number, b: number) => number; //функции различаются между собой
let func2: (a: number) => number; //количеством аргументов
func2 = func1; //ошибка, поскольку тип (a: number) => number невозможно привести к типу (a: number, b: number) => number
func1 = func2; //а вот наоборот очень даже

//Перечисления
/*
Перечисления совместимы с числами, а числа совместимы с перечислениями.
Значения из различных перечислений считаются несовместимыми друг с другом.
 */
enum States {On, Off, Broken}
enum Colors {Red, Green, Blue}
let state = States.On;
state = Colors.Red; //вот так не сработает

//Классы
/*
Классы работают подобно типам объектных литералов и интерфейсам, но с одним исключением:
у них есть тип статической части и тип экземпляра. При сравнении двух объектов, которые имеют классовый тип,
сравниваются только члены экземпляра. Статические члены и конструкторы не влияют на совместимость.
 */
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let animal: Animal;
let size: Size;

animal = size;  //разные конструкторы
size = animal; //не влияют на приведение типов

/*
Приватные и защищенные члены классов
Приватные и защищенные члены классов влияют на их совместимость.
Когда экземпляр класса проходит проверку на совместимость, то, если у него есть приватный член,
у целевого типа тоже должен быть приватный член, объявленный в том же классе.
Это относится и к экземплярам с защищенными членами.
Такая особенность позволяет классам быть совместимыми при присваивании базовому классу,
но не классу из другой иерархии наследования, даже если бы он имел такую же форму.
 */

class D {
    private a: number;
    b: string;
}
class E {
    b: string;
}
let d: D = new D();
let e: E = new E();
d = e; //вот так работать не будет из-за приватного свойства a
e = d;

class Parent {
    a: string;
}

class Child extends Parent {
    b: string;
}

class AsChild {
    a: string;
    b: string;
}

let child: Child = new Child();
let asChild: AsChild = new AsChild();
child = asChild; //вот так работать будет
asChild = child;

class ParentProtected {
    protected a: string;
}

class ChildProtected extends ParentProtected {}

class AsChildProtected {
    protected a: string;
}

let childProtected: ChildProtected = new ChildProtected();
let asChildProtected: AsChildProtected = new AsChildProtected();
childProtected = asChildProtected; //а вот так работать не будет, т.к. AsChildProtected не наследник ParentProtected
