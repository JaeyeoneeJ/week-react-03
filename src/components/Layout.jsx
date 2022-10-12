import styled from "styled-components"

const LayoutCtn = styled.div`
    max-width: 1200px;
	min-width: 300px;
    margin: 0 auto;
`

const Layout = (props) => {
    return (
        <LayoutCtn>
            {props.children}
        </LayoutCtn>
    )
}

export default Layout