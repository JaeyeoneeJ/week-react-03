import { createStore, combineReducers,  } from "redux";
import todos from "../modules/todos";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["todos"]
}

// reducer를 뭉친 것을 rootReducer 라고 정해준다.
// reducer는 여러개 있을 수 있으므로 하나로 뭉쳐주는 작업이다.
const rootReducer = combineReducers({
    todos: todos,
});

// persistReducer와 reducer를 뭉쳐놓은 덩어리(rootReducer)를 같이 합쳐준다.
const perReducer = persistReducer(persistConfig, rootReducer)

// 뭉쳐진 리듀서들을 넣어서 스토어를 만들어준다.
// 리듀서 뿐만 아니라 미들웨어나 필요한 것들도 같이 넣을 수 있다.

// reducer + optional들을 넣어서 스토어를 만들어준다.
const store = createStore(perReducer);

export default store;