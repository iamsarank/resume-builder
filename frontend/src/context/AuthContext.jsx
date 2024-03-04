import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    //email: localStorage.getItem('email') || null,
    token: localStorage.getItem('token') || null
}

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                //email: null,
                token: null
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                // email: action.payload.email,
                token: action.payload.token
            };
        case 'LOGOUT':
            return {
                user: null,
                //email: null,
                token: null
            };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
        //localStorage.setItem("email",state.user.email);
    }, [state]);

    return <authContext.Provider value={{ user: state.user, token: state.token, dispatch }}>
        {children}
    </authContext.Provider>
}