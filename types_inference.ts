class Animal {
    public live(): void {
        console.log('Live');
    }
}
class Cat extends Animal{
    public meow(): void {
        console.log('Meow');
    }
}
class Dog extends Animal{
    public bark(): void {
        console.log('Bark');
    }
}
class Mouse extends Animal{
    public pi(): void {
        console.log('Pipi');
    }
}
const zoo = [new Cat(), new Dog(), new Mouse()]; //В идеале, хотелось бы, чтобы тип zoo был выведен как Animal[]
const zoo2: Animal[] = [new Cat(), new Dog(), new Mouse()]; //или можно выполнить явное приведение типа к базовому классу (upcast)
zoo[0].meow(); //так не работает
zoo2[1].bark(); //т.к. экземпляры классов Cat и Dog были приведены к типу Animal, у которого не реализованы методы meow и bark
zoo[0].live();
zoo2[1].live();