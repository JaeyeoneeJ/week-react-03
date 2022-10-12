import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { submitTodo } from "../redux/modules/todos";
import styled from "styled-components"

const FormCtn = styled.form`
	background-color: #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 30px;
	gap: 20px;
	@media screen and (max-width: 880px) {
		justify-content: space-around;
	}
	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`

const InputArea = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 20px;
	font-weight: 700;
	@media screen and (max-width: 880px) {
		flex-direction: column;
	}
`
const InputTitleChild = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`
const InputTitle = styled.label`
	min-width: 30px;
`
const InputBody = styled.input`
	border: none;
	width: 250px;
	height: 40px;
	border-radius: 10px;
	padding: 0 12px;
`
const Caution = styled.span`
	font-size: small;
	font-weight: 400;
	color: tomato;
	position: absolute;
	top: -18px;
	left: 0;
	display: none;
`

const InputBtn = styled.button`
	background-color: #1a73e8;
	color: white;
	font-weight: 700;
	border: none;
	border-radius: 10px;
	height: 40px;
	width: 130px;
	transition: all, 0.3s;
	&:hover {
		background-color: gray;
		cursor: pointer;
	}
`

function Form() {
	// form에 넣을 initialState(초기값) 생성
	const initialState = {
		id: 0,
		title: "",
		content: "",
		isDone: false,
	}

	// form 값을 수정할 수 있는 useState 생성
	const [todo, setTodo] = useState(initialState)

	// dispatch 함수 불러와!
	const dispatch = useDispatch()

	// 전역객체로 todos 불러와!
	const globalTodos = useSelector((state) => state.todos.todos)
	
	// todo에 들어갈 id값 설정
	const id = (globalTodos.length !== 0) ? globalTodos[globalTodos.length - 1].id + 1 : 1
	

	// form input 값 바뀔 때, value에 넣어주고, todo에 업데이트!
	const onChangeHandler = (event) => {
		const { name, value } = event.target
		setTodo({ ...todo, [name]: value })
		document.getElementsByClassName('caution')[0].style.display='none'
	}
	// console.log(todo)
	
	// 시간 계산


	const onSubmitHandler = (event) => {
		// form 안에 submit 역할을 하는 버튼을 눌렀어도 새로고침 못하게!
		event.preventDefault()

		// input 값에 공백 등 결과가 없을 때 바로 함수를 빠져나와라
		if (todo.title.trim() === "" || todo.content.trim() === "") {
			return document.getElementsByClassName('caution')[0].style.display='block'
		}

		dispatch(
			submitTodo({ ...todo, id })
		)
		
		alert(`새로운 Todo가 추가되었습니다.\n\n제목 : ${todo.title}\n내용 : ${todo.content}`)
		setTodo(initialState)
	}
	// console.log(globalTodos)

	return (
		<FormCtn onSubmit={onSubmitHandler}>
			<InputArea>
				<InputTitleChild>
					<InputTitle>제목</InputTitle>
					<InputBody
						name="title"
						value={todo.title}
						onChange={onChangeHandler}
						autocomplete="off"
					/>
				</InputTitleChild>
				<InputTitleChild>
					<InputTitle>내용</InputTitle>
					<InputBody
						name="content"
						value={todo.content}
						onChange={onChangeHandler}
						autocomplete="off"
					/>
				</InputTitleChild>
				<Caution className="caution">※ 제목 또는 내용이 비어있습니다.</Caution>
			</InputArea>
			<InputBtn>추가하기</InputBtn>
		</FormCtn>
	)
}

export default Form