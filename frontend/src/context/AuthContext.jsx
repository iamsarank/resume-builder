import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
    user: null,
    email: null,
    token: null
}

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                email: null,
                token: null
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                email: action.payload.email,
                token: action.payload.token
            };
        case 'LOGOUT':
            return {
                user: null,
                email: null,
                token: null
            };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return <authContext.Provider value={{ user: state.user, email: state.email, token: state.token, dispatch }}>
        {children}
    </authContext.Provider>
}