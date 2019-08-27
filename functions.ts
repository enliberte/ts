//ПОЛНЫЙ ТИП ФУНКЦИИ
const myAdd: (x: number, y: number) => number = function (a: number, b: number): number {
  return a + b;
};
const myMulti: (x: number, y: number) => number = (a: number, b: number): number => {
    return a * b;
};

//ВЫВЕДЕНИЕ ТИПОВ
//typescript выведет типы на основе типов слева или справа
const myAdd2: (x: number, y: number) => number = (a, b) => a + b;
const myMulti2 = function (x: number, y: number): number {
    return x * y;
};

//ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ И ПО УМОЛЧАНИЮ
//необязательные параметры должны идти в конце
const buildName = (firstName: string, lastName?: string): string => lastName? `${firstName} ${lastName}` : lastName;
buildName('Alex');
buildName('Alex', 'Sumatokhin');
// buildName(); //слишком мало параметров
// buildName('Alex', 'Sumatokhin', 'Sergeevich'); //слишком много параметров

//по умолчанию (параметры могут находиться в любом месте)
const buildName2 = (firstName: string, lastName: string = 'Sumatokhin'): string => `${firstName} ${lastName}`;
buildName2('Alex');
buildName2('Alex', 'Ivanov');

//остаточные параметры
const buildName3 = (firstName: string, ...restArgs: string[]): string => `${firstName} ${restArgs.join(' ')}`;
buildName3('Alex');
buildName3('Alex', 'Alice', 'Mira');

//параметры this
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // ВНИМАНИЕ: Сейчас функция явно указывает на то, что она должна вызываться на объекте типа Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
};

//Перегрузка

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Работаем с объектом/массивом?
    // Значит, нам передали колоду и нужно выбрать карту
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Иначе даем возможность выбрать карту
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

