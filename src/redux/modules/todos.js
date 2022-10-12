// Action Value
const SUBMIT_TODO = "SUBMIT_TODO"
const DELETE_TODO = "DELETE_TODO"
const EDIT_TODO = "EDIT_TODO"
const RESET_TODO = "RESET_TODO"

// Action Creator
export const submitTodo = (payload) => {
    return {
        type: SUBMIT_TODO,
        payload,
    }
}
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
}
export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload,
    }
}
export const resetTodo = (payload) => {
    return {
        type: RESET_TODO,
        payload,
    }
}


// Initial State
const InitialState = {
    todos: [
        {
            id: 1,
            title: "[완료 기능 리스트]",
            content: `1) 모바일 최적화: 미디어쿼리 활용(max-width 880px, 500px), iPhone 테스트 완료\n2) state 저장: redux-persist 활용, Local Storage 내 todos State 저장\n3) state RESET: 'todos' state의 초기값 복원 기능 구현 및 비동기 처리`,
            isDone: true,
        },
        {
            id: 2,
            title: "수정 기능 구현",
            content: "수정 버튼 클릭 시, div 태그를 input 태그로 변환 후 내용 수정 및 수정완료 버튼 클릭 시, submit",
            isDone: false,
        },
        {
            id: 3,
            title: "게시글 작성 시간 역 계산",
            content: "00분 전 과 같이 60분 전이면 00분 전, 24시간 전이면 00시간 전, 24시간 이후면 날짜 표시",
            isDone: false,
        },
    ]
}

// Reducer
const todos = (state = InitialState, action) => {
    switch (action.type) {
        // 하고자 하는 액션 이름
        case SUBMIT_TODO:  // todo를 제출해서 todos에 합쳐줘!
            return {
                // 실행할 함수 결과
                // ...state,  // => 현재 initialState 안에 todos key 하나만 있어서 굳이 전개할 필요가 없음
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                // ...state,
                todos: state.todos.filter((todo) => (todo.id !== action.payload))
            }
        case EDIT_TODO:
            return {
                // ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo, isDone: !todo.isDone
                        }
                    } else {
                        return todo
                    }
                })
            }
        case RESET_TODO:
            console.log("The state of 'todos' has been reset.")
            return InitialState
        default:
            return state
    }
}

// 모듈파일에는 리듀서를 export default 한다.
export default todos