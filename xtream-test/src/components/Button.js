import styled from "styled-components";

const StyledButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: min-content;
`

function Button(props) {
    return(
        <div className='dropdown'>
            <StyledButton className='d-flex align-items-center justify-content-center' type="button" data-bs-toggle="dropdown">
                <img src={props.src} width={30} />
            </StyledButton>
            <ul className='dropdown-menu p-0 m-0'>
                <li onClick={props.firstFunction}> {props.firstItem} </li>
                <li onClick={props.secondFunction} > {props.secondItem} </li>
            </ul>
        </div>
    )
}

export default Button