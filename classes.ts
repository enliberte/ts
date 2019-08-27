class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    meow() {
        console.log(`${this.name} meow`)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    bark() {
        console.log(`${this.name} bark`)
    }
}

const fish = new Animal('Gold');
fish.move();
const cat = new Cat('Viki');
cat.meow();
const dog = new Dog('Monica');
dog.bark();

//МОДИФИКАТОРЫ ДОСТУПА
//public по умолчанию
class Animal2 {
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public move(distance: number) {
        console.log(`${this.name} moved ${distance}`);
    }
}

//private
//Когда член класса помечен модификатором private, он не может быть доступен вне этого класса
class Animal3 {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const a = new Animal3('A');
// console.log(a.name); //ошибка

// class Child extends Animal3 {
//     constructor(name: string) {
//         super(name);
//     }
//     greet() {
//         console.log(this.name); ошибка (поле доступно только в классе)
//     }
// }

//protected
//Модификатор protected действует аналогично private за исключением того, что члены, объявленные protected, могут быть доступны в подклассах
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    hi() {
        console.log(this.name);
    }
}

class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`; //поле name доступно в подклассе
    }
}

const alice = new Person('Alice');
// console.log(alice.name); //ошибка поле доступно только в подклассах
const alex = new Employee('Alex', 'Frontend');
// console.log(alex.name); //поле недоступно
console.log(alex.getElevatorPitch());

//МОДИФИКАТОР READONLY
//Свойства, доступные только для чтения, должны быть инициализированы при их объявлении или в конструкторе

class A {
    readonly name: string;
    readonly job: string = 'Frontend';
    constructor(name: string) {
        this.name = name;
    }
}

const a1 = new A('A');
console.log(a1.job);
// a1.job = 'Backend'; //ошибка

//СВОЙСТВА ПАРАМЕТРОВ
//свойства параметров позволяют создавать и инициализировать члены в одном месте
class B {
    constructor(public b: string, private c: string, private d: string) {}
}
const b = new B('1', '2', '3');
console.log(b.b);
// console.log(b.c); ошибки
// console.log(b.d);

//АКСЕССОРЫ (ГЕТТЕРЫ/СЕТТЕРЫ)
class Robot {
    private _power: number;
    get power(): number {
        return this._power;
    }
    set power(value: number) {
        this._power = (value < 0) ? 0 : value;
    }
}

const wally = new Robot();
wally.power = 100;
console.log(wally.power); //100

const broken = new Robot();
broken.power = -100;
console.log(broken.power); //0

//СТАТИЧЕСКИЕ СВОЙСТВА
class Planet {
    static planetCount: number;
    constructor(public name: string) {
        Planet.planetCount++;
    }

}
