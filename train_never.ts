let throwError = (): never => {
    throw Error('Error');
};
throwError = null;
throwError = undefined;
let endlessLoop = (): never => {
    while (true) {}
};
// let returnOne = (): never => 1; //ошибка