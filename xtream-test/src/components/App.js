import styled from 'styled-components';
import Comments from './CommentBox';

const StyledContainer = styled.div`
    border-radius: .5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5rem;
    justify-content: start;
    height: auto;
    width: auto;
    margin-bottom: 3em;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    break-inside: avoid;
`
const StyledButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: min-content;
`
const StyledText = styled.p`
    font-size: .85em;
    margin-bottom: 0;
`

function App(props) {
    return (
        <StyledContainer index={props.index}>
            <div className='d-flex align-items-center justify-content-between px-1 py-1 w-100'>
                <div className='d-flex align-items-center gap-2'>
                    <img src={props.profileImg} width={30} height={30}/>
                    <StyledText className='fs-6 fw-bold m-0 p-0'> {props.creatorName} </StyledText>
                </div>
                <div className='dropdown'>
                    <StyledButton className='d-flex align-items-center justify-content-center' type="button" data-bs-toggle="dropdown">
                        <img src={'https://cdn-icons-png.flaticon.com/128/7881/7881805.png'} width={30} />
                    </StyledButton>
                    <ul className='dropdown-menu p-0 m-0'>
                        <li> Edit </li>
                        <li onClick={props.deletePost} > Delete </li>
                    </ul>
                </div>
            </div>
            <img className='w-100' src={props.imgSrc} />
            <StyledText>
                <span className='fw-bold me-1'> {props.username} </span>
                {props.dsc}
            </StyledText>
            <Comments />
        </StyledContainer>
    );
}

export default App;
