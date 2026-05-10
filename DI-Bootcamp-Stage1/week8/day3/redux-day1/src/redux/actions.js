import { ADDVALUE } from "./reducers"

export const increment = () => {
    return {
        type: "INCREMENT",
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT",
    }
}

export const addInputValue = (value) => {
    return {
        type: ADDVALUE,
        payload: value,
    }
}

