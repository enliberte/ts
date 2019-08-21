//Статические свойства
var Planet = /** @class */ (function () {
    function Planet(name) {
        this.name = name;
        Planet.discover();
    }
    Planet.count = 0;
    Planet.discover = function () {
        Planet.count++;
    };
    return Planet;
}());
console.log(Planet.count);
var earth = new Planet('Earth');
var mars = new Planet('Mars');
console.log(Planet.count);
