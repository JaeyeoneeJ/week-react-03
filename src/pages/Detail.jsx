import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import { deleteTodo, editTodo } from "../redux/modules/todos";
import Header from "../components/Header"
import styled from "styled-components"

const DetailWrap = styled.div`
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
`
const DetailState = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.color};
    display: flex;
    justify-content: center;
`
const DetailCtn = styled.div`
    max-width: 800px;
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
    margin: 30px auto;
    border: 3px ${props => props.borderStyle};
    border-radius: 10px;
    padding: 30px;
`

const DetailBackBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DetailBackBtn = styled.button`
    border: 2px solid #ddd;
    border-radius: 5px;
    background-color: transparent;
    padding: 5px 10px;
    color: gray;
    transition: all, 0.3s;
    &:hover {
        font-weight: 700;
        background-color: #ddd;
        color: white;
        cursor: pointer;
    }
`
const DetailID = styled.div`
    color: #ccc;
`
const DetailHr = styled.hr`
    background-color: #ddd;
    border: none;
    margin: 30px 0;
    height: 2px;
`
const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const DetailTitle = styled.div`
    font-size: 30px;
    font-weight: 700;
`
const DetailContent = styled.div`
    font-size: 16px;
    color: gray;
    min-height: 100px;
    white-space: pre-wrap;
    line-height: 1.5;
`
const DetailBtnBox = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`

const DetailBtn = styled.button`
    font-weight: 700;
    min-width: 100px;
    width: 10%;
    padding: 10px;
    background-color: transparent;
    border: 2px solid ${props => props.color};
    border-radius: 10px;
    transition: all, 0.3s;
    &:hover {
        background-color: ${props => props.color};
        color: white;
        cursor: pointer;
    };
`


const Detail = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams();

    // 전역객체로 todos 불러와!
    const globalTodos = useSelector((state) => state.todos.todos)
    // console.log(globalTodos)
    const [thisTodo] = globalTodos.filter((todo) => todo.id === Number(id))
    console.log(thisTodo.id)

    // 삭제 버튼 구현
    const onDeleteHandler = (todoID) => {
        (window.confirm(`Todo: ${thisTodo.title}\n\n정말로 삭제하시겠습니까?`)) && (dispatch(deleteTodo(todoID)))
        navigate("/")
    }

    // 취소/완료 버튼 구현
    const onEditHandler = (todoID) => {
        dispatch(editTodo(todoID))
    }

    
    return (
        <div>
            <Header />
            <DetailWrap>
                <DetailState
                    color={(thisTodo.isDone) ? "#1a73e8" : "tomato"}
                >
                    {(thisTodo.isDone) ? "Done!!! 🎉🎉🎉" : "Working... 🔥🔥🔥"}
                </DetailState>
                <DetailCtn
                    borderStyle={(thisTodo.isDone) ? "solid #1a73e8" : "dotted tomato"}
                >
                    <DetailBackBox>
                        <DetailBackBtn onClick={() => navigate("/")}>
                            &#60; 이전
                        </DetailBackBtn>
                        <DetailID>
                            ID : {thisTodo.id}
                        </DetailID>
                    </DetailBackBox>
                    <DetailHr />
                    <DetailBox>
                        <DetailTitle>
                            {thisTodo.title}
                        </DetailTitle>
                        <DetailContent>
                            {thisTodo.content}
                        </DetailContent>
                    </DetailBox>
                    <DetailHr />
                    <DetailBtnBox>
                        <DetailBtn
                            color="tomato"
                            onClick={() => onDeleteHandler(thisTodo.id)}
                        >
                            삭제하기
                        </DetailBtn>
                        <DetailBtn
                            color="#1a73e8"
                            onClick={() => onEditHandler(thisTodo.id)}
                        >
                            {thisTodo.isDone ? "취소" : "완료"}
                        </DetailBtn>
                    </DetailBtnBox>
                </DetailCtn>
            </DetailWrap>
        </div>
    )
}
export default Detail