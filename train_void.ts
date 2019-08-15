let consoleLogHi = (): void => {
    console.log('Hi');
};
consoleLogHi = undefined;
consoleLogHi = null;
//consoleLogHi = 1; //ошибка
//let returnOne = (): void => 1; //ошибка