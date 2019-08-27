//ПОЛНЫЙ ТИП ФУНКЦИИ
var myAdd = function (a, b) {
    return a + b;
};
var myMulti = function (a, b) {
    return a * b;
};
//ВЫВЕДЕНИЕ ТИПОВ
//typescript выведет типы на основе типов слева или справа
var myAdd2 = function (a, b) { return a + b; };
var myMulti2 = function (x, y) {
    return x * y;
};
//ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ И ПО УМОЛЧАНИЮ
//необязательные параметры должны идти в конце
var buildName = function (firstName, lastName) { return lastName ? firstName + " " + lastName : lastName; };
buildName('Alex');
buildName('Alex', 'Sumatokhin');
// buildName(); //слишком мало параметров
// buildName('Alex', 'Sumatokhin', 'Sergeevich'); //слишком много параметров
//по умолчанию (параметры могут находиться в любом месте)
var buildName2 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'Sumatokhin'; }
    return firstName + " " + lastName;
};
buildName2('Alex');
buildName2('Alex', 'Ivanov');
//остаточные параметры
var buildName3 = function (firstName) {
    var restArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restArgs[_i - 1] = arguments[_i];
    }
    return firstName + " " + restArgs.join(' ');
};
buildName3('Alex');
buildName3('Alex', 'Alice', 'Mira');
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // ВНИМАНИЕ: Сейчас функция явно указывает на то, что она должна вызываться на объекте типа Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
//Перегрузка
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Работаем с объектом/массивом?
    // Значит, нам передали колоду и нужно выбрать карту
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Иначе даем возможность выбрать карту
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
