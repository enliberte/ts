const LOGIN: string = 'LOGIN';
const LOGOUT: string = 'LOGOUT';

type AuthData = {
    login: string,
    password: string,
    isAuth: boolean
}

type LoginAction = {
    type: string,
    payload: AuthData
}

type LogoutAction = {
    type: string
}

type Actions = LoginAction | LogoutAction;


const isLoginAction = (action: Actions): action is LoginAction => (<LoginAction>action).payload !== undefined;


const reducer = (action: Actions): AuthData => {
    switch (action.type) {
        case LOGIN:
            if (isLoginAction(action)) {
                return {...action.payload, isAuth: true};
            }
        case LOGOUT:
            return {
                login: '', password: '', isAuth: false
            };
    }
};

const loginAction: LoginAction = {
    type: LOGIN,
    payload: {
        login: 'alex',
        password: '123',
        isAuth: false
    }
};

const logoutAction: LogoutAction = {
    type: LOGOUT,
};

console.log(reducer(loginAction));
console.log(reducer(logoutAction));