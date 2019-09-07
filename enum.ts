//Перечисления - это набор именованных числовых констант
enum State {On, Off, Broken}

class Robot {
    private state: number;

    constructor(state: number) {
        this.state = state;
    }
}

const offRobot: Robot = new Robot(State.Off);
const onRobot: Robot = new Robot(State.On);
const brokenRobot = new Robot(State.Broken);

