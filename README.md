# My Todo List

항해9기 React 주특기 2주차 과제 My Todo List. by - Rudux

This project was bootstrapped with [Create React App]

## 1. 구동 사진
<img width="100%" alt="working" src="https://user-images.githubusercontent.com/77138259/195078999-8c700704-9fde-4891-b847-aef39545a788.gif">

## 1. 컴포넌트 구조
<div>
  <img width="10%" alt="components" src="https://user-images.githubusercontent.com/77138259/195024217-d63603ac-b61e-4617-8756-33175e0fbbcf.png">
  <img width="80%" alt="components" src="https://user-images.githubusercontent.com/77138259/195032353-046e4f5d-17c7-4718-870c-2895c6c219ef.png">
</div>


### `1) Header.jsx`

"/" , "/detail/:id" 이동 시, Header 컴포넌트 노출을 위해 분리하였습니다.

### `2) Form.jsx`

todos 배열에 해당 객체를 submit 하는 용도로,
사용자를 통해 정보를 입력받기 위해 컴포넌트를 따로 분리하였습니다.

### `3) List.jsx`

todos 배열을 'working' 과 'done' 상태로 구분하고 mapping 하는 용도로,
사용자에게 todos 배열을 시각적으로 보여주는 영역을 따로 분리하였습니다.

### `4) Layout.jsx`

위의 컴포넌트들을 감싸주는 부모 컴포넌트로, 페이지 가운데 정렬 및 최소/최대 크기를 정하기 위해 분리하였습니다.
