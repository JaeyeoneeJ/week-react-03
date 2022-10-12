// Action Value
const ADD_NUMBER = "ADD_NUMBER"
const REMOVE_NUMBER = "REMOVE_NUMBER"

// Action Creator
export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload,
    }
}
export const removeNumber = (payload) => {
    return {
        type: REMOVE_NUMBER,
        payload,
    }
}


// Initial State
const InitialState = {
    number: 0,
}

// Reducer
const counter = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                // state.number (기존의 number)에 action.payload(유저가 더하길 원하는 값)을 더한다.
                number: state.number + action.payload,
            }
        case REMOVE_NUMBER:
            return {
                number: state.number - action.payload,
            }
        default:
            return state
    }
}

// 모듈파일에는 리듀서를 export default 한다.
export default counter

