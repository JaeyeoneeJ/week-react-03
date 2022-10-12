import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, removeNumber } from "./redux/modules/counter";

const App = () => {
	// 1. dispatch를 사용하기 위해 선언
	const dispatch = useDispatch()
	const [number, setNumber] = useState(0)
	const globalNumber = useSelector((state)=> state.counter.number)

	const onChangeHandler = (event) => {
		const { value } = event.target
		// event.target.value는 문자열입니다.
		// 이것을 숫자형으로 형변환하기 위해 +를 붙여줬습니다.
		setNumber(+value)
	}
	// 2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러 생성
	const onClickAddNumberHandler = () => {
		// 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
		dispatch(addNumber(number))
	}
	const onClickRemoveNumberHandler = () => {
		dispatch(removeNumber(number))
	}


	return (
		<div>
			<div>{globalNumber}</div>
			<input onChange={onChangeHandler} type="number" />
			
			{/* 3. 더하기 버튼 이벤트핸들러를 연결 */}
			<button onClick={onClickAddNumberHandler}>더하기</button>
			<button onClick={onClickRemoveNumberHandler}>빼기</button>
		</div>
	)
}

export default App;