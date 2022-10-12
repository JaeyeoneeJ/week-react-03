import { useDispatch } from "react-redux"
import { resetTodo } from "../redux/modules/todos";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const HeaderCtn = styled.div`
	color: #BBB;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	margin: 0 10px;
	height: 50px;
	font-weight: 700;
`
const ResetBtn = styled.button`
	border: 2px solid black;
	border-radius: 50px;
	padding: 5px 10px;
	font-weight: 700;
	background-color: #ffcf36;
	transition: all, 0.3s;
	&:hover {
		background-color: tomato;
		color: white;
		cursor: pointer;
	}
`

function Header() {
	// dispatch 함수 불러와!
	const dispatch = useDispatch()
	
	const navigate = useNavigate()

	const onResetHandler = async () => {
		if (window.confirm(`RESET될 경우, 저장되어 있는 Local Storage가 초기화 됩니다. \n정말 RESET 하시겠습니까?`)) {
			navigate("/")
			await dispatch(resetTodo())
			console.log('메인으로 돌아갑니다.')
			await alert(`RESET이 완료되었습니다.`)
		} else {
			alert(`RESET이 취소되었습니다. \n신중히 생각하신 후, RESET 버튼을 눌러주세요.`)
		}
	}
	return (
		<HeaderCtn>
			<div>My Todo List - by React.js</div>
			<ResetBtn onClick={()=>onResetHandler()}>
				RESET
			</ResetBtn>
		</HeaderCtn>
	)
}

export default Header