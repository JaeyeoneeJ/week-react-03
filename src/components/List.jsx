import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, editTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components"

const ListCtn = styled.div`
	padding: 20px;
    display: flex;
    flex-direction: row;
    
    justify-content: space-around;
    @media screen and (max-width: 880px) {
		flex-direction: column;
        justify-content: center;
	}
    gap: 20px;
`
const ListDiv = styled.div`
    display: flex;
    margin: 0 auto;
    width: 90%;
    flex-direction: column;
    max-width: 400px;
    box-sizing: border-box;
`

const ListTitle = styled.h2`
    text-align: center;
    color: ${props => props.color};
    margin: 0;
    padding-bottom: 20px;
    border-bottom: 2px solid #eee;
`
const ListBox = styled.div`
    margin-top: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

// todo 영역
const TodoCtn = styled.div`
    border: 3px ${props => props.borderStyle} ${props => props.color};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    transition: all, 0.3s;
    &:hover {
        transform: scale(1.05);
    }
`

const TodoHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: relative;
`
const TodoTitle = styled.h2`
    margin: 0 0 15px 0;
    @media screen and (max-width: 500px) {
        margin-top: 15px;
    }
`
const TodoDetailLink = styled.p`
    width: 62px;
    height: 30px;
    background-color: transparent;
    color: gray;
    border: none;
    transition: all, 0.3s;
    display: block;
    font-size: 14px;
    &:hover {
        color: #1a73e8;
        font-weight: 700;
        cursor: pointer;
    }
    @media screen and (max-width: 500px) {
        display: inline-block;
        position: absolute;
        top: -20px;
        right: 0px;
	}
`
const TodoContent = styled.div`
    color: gray;
    white-space: pre-wrap;
    min-height: 50px;
    line-height: 1.5;
    margin-bottom: 20px;
`
const TodoBtnBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
    gap: 10px;
`
const TodoBtn = styled.button`
    font-weight: 700;
    box-sizing: border-box;
    min-width: 50px;
    width: 100%;
    height: 50px;
    border: 2px solid ${props => props.color};
    border-radius: 10px;
    
    background-color: transparent;
    transition: all, 0.3s;
    &:hover {
        background-color: ${props => props.color};
        color: white;
        cursor: pointer;
    };
`

function List() {
    // 전역객체로 todos 불러와!
    const globalTodos = useSelector((state) => state.todos.todos)

    // dispatch 임포트
    const dispatch = useDispatch()

    // 삭제 버튼 구현
    const onDeleteHandler = (todoID, todoTitle) => {
        (window.confirm(`Todo: ${todoTitle}\n\n정말로 삭제하시겠습니까?`)) && (dispatch(deleteTodo(todoID)))
    }

    // 취소/완료 버튼 구현
    const onEditHandler = (todoID) => {
        dispatch(editTodo(todoID))
    }
    // console.log(globalTodos)
    return (
        <ListCtn>
            <ListDiv>
                <ListTitle color="tomato">Working... 🔥🔥🔥</ListTitle>
                <ListBox>
                    {
                        globalTodos.map((todo) => {
                            if (!todo.isDone) {
                                return (
                                    <TodoCtn
                                        color="tomato"
                                        borderStyle="dotted"
                                        key={todo.id}
                                    >
                                        <TodoHeader>
                                            <Link to={`/detail/${todo.id}`}>
                                                <TodoDetailLink>
                                                    + 상세보기
                                                </TodoDetailLink>
                                            </Link>
                                            <TodoTitle>
                                                {todo.title}
                                            </TodoTitle>
                                        </TodoHeader>
                                        <TodoContent>{
                                            todo.content.length > 125 ? `${todo.content.slice(0, 125)}...` : todo.content
                                        }
                                        </TodoContent>
                                        <TodoBtnBox>
                                            <TodoBtn
                                                color="red"
                                                onClick={() => onDeleteHandler(todo.id, todo.title)}
                                            >
                                                삭제하기
                                            </TodoBtn>
                                            <TodoBtn
                                                color="#1a73e8"
                                                onClick={() => onEditHandler(todo.id)}
                                            >
                                                {todo.isDone ? "취소" : "완료"}
                                            </TodoBtn>
                                        </TodoBtnBox>
                                    </TodoCtn>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </ListBox>
            </ListDiv>
            <ListDiv>
                <ListTitle color="#1a73e8">Done!!! 🎉🎉🎉</ListTitle>
                <ListBox>
                    {
                        globalTodos.map((todo) => {
                            if (todo.isDone) {
                                return (
                                    <TodoCtn
                                        color="#1a73e8"
                                        borderStyle="solid"
                                        key={todo.id}
                                    >
                                        <TodoHeader>
                                            <Link to={`/detail/${todo.id}`}>
                                                <TodoDetailLink >
                                                    + 상세보기
                                                </TodoDetailLink>
                                            </Link>
                                            <TodoTitle>
                                                {todo.title}
                                            </TodoTitle>
                                        </TodoHeader>
                                        <TodoContent>{
                                            todo.content.length > 125 ? `${todo.content.slice(0, 125)}...` : todo.content
                                        }
                                        </TodoContent>
                                        <TodoBtnBox>
                                            <TodoBtn
                                                color="red"
                                                onClick={() => onDeleteHandler(todo.id)}
                                            >
                                                삭제하기
                                            </TodoBtn>
                                            <TodoBtn
                                                color="#1a73e8"
                                                onClick={() => onEditHandler(todo.id)}
                                            >
                                                {todo.isDone ? "취소" : "완료"}
                                            </TodoBtn>
                                        </TodoBtnBox>
                                    </TodoCtn>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </ListBox>
            </ListDiv>
        </ListCtn>
    )
}

export default List