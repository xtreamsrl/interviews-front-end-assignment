import styled from "styled-components";
import { useState } from "react";
import { commentsArray } from "../comments";
import '../index.css';

const StyledComment = styled.div`
    cursor: pointer;
    display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: start;
    font-size: .8em;
    height: 6rem;
    width: 100%;
`

function Comments() {
    let i = Math.floor(Math.random() * (commentsArray.length - 1));
    const [index, setIndex] = useState(i);
    const [animation, setAnimation] = useState('initial')
    const commentsAnimation = () => {
        setTimeout(() => setAnimation('goUp'), 0);
        setTimeout(() => setAnimation('initial'), 500);
    }
    const CommentBoxAnimation = () => {
        commentsAnimation();
        setIndex(i);
    }
    return(
        <StyledComment className={animation} onLoad={() => {CommentBoxAnimation()}}>
            <div className={'d-flex align-items-center justify-content-center gap-2'}>
                <span className={'fw-bold'}> {commentsArray[i]['author']} </span>
                <span> @{commentsArray[i]['username']} </span>
            </div>
            <span> {commentsArray[i]['comment']} </span>
        </StyledComment>
    )
}
export default Comments