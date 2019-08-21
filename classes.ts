//Статические свойства
class Planet {
    static count: number = 0;
    static discover: () => void = () => {
        Planet.count++;
    };
    constructor(public name: string) {
        Planet.discover();
    }
}

console.log(Planet.count); // 0
const earth = new Planet('Earth');
const mars = new Planet('Mars');
console.log(Planet.count); // 2

//Абстрактные классы
//Абстрактные классы — это базовые классы, от которых наследуются другие. Их экземпляры не могут быть созданы напрямую
abstract class B {
    abstract getSomeStr(): string;
    consoleLog(log: string): void {
        console.log(log);
    }
}
// const b = new B(); // ошибка (нельзя создать экземпляр абстрактного класса)
class C extends B {
    getSomeStr(): string {
        return "C";
    }
}

const c = new C();
c.getSomeStr();
c.consoleLog('123');

//Приведение типов
class Animal {
    a: string;
    b: string;
    c(): void {
        console.log('c');
    }
}

class Bird extends Animal {
    d(): void {
        console.log('d');
    }
}

let bird: Animal;
bird = new Bird();
console.log(bird.a);
console.log(bird.b);
bird.c();
// bird.d(); // ошибка (свойство d отсутствует в классе Animal)

//Использование класса в качестве интерфейса
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};