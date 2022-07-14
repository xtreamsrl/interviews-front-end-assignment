import styled from "styled-components";
import App from "./App";
import '../index.css';
import { defaultArray } from "../array";
import { nameArray, getKey, imgArray } from "../main";
import { useState } from "react";

const StyledHeader = styled.div`
    background: #FFF;
    border-bottom: .1rem solid #000;
    display: flex;
        align-items: center;
        justify-content: space-between;
    font-size: 1.25em;
    height: 4rem;
    padding: 0 2.5rem 0 2rem;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9999;
    @media (max-width: 600px) {
        font-size: 1em;
        padding: 1rem;
    }
`
const StyledFeed = styled.div`
    padding: 5rem 2rem;
    max-width: 100vw;
    overflow: hidden;
    -webkit-column-count: 4;
    -webkit-column-gap: 2em;
    -webkit-column-fill: auto;
    -moz-column-count: 4;
    -moz-column-gap: 2em;
    -moz-column-fill: auto;
    column-count: 4;
    column-gap: 2em;
    column-fill: auto;
    @media (max-width: 600px) {
        padding: 4.5rem 1rem;
        -webkit-column-count: 1;
        -webkit-column-gap: 0;
        -moz-column-count: 1;
        -moz-column-gap: 0;
        column-count: 1;
        column-gap: 0;
    }
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
const StyledHomepage = styled.div`
    height: 100vh;
    max-width: 100vw;
`

function Homepage() {
    const [array, updateArray] = useState(defaultArray);
    const [counter, setCounter] = useState(defaultArray.length);
    return(
        <StyledHomepage>
            <StyledHeader className='header'>
                <span className="fw-bold"> xtream test </span>
                <span> Post counter: {counter} </span>
                <StyledButton onClick={() => {
                        let name = nameArray[Math.floor(Math.random() * nameArray.length)]
                        let newObject = new Object();
                        newObject = {
                            key: getKey(),
                            creatorName: name,
                            profileImg: 'https://cdn-icons-png.flaticon.com/128/1946/1946392.png',
                            imgSrc: imgArray[Math.floor(Math.random() * imgArray.length)],
                            username: name.toLowerCase().concat('01'),
                            dsc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur.'
                        }
                        array.push(newObject);
                        setCounter(counter + 1)
                        console.log(array)
                    }}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/446/446136.png'} width={30} />
                </StyledButton>
            </StyledHeader>
            <StyledFeed>
                {array.map(( {key, profileImg, creatorName, imgSrc, username, dsc} ) => (
                    <App
                        key={key}
                        profileImg={profileImg}
                        creatorName={creatorName}
                        imgSrc={imgSrc} 
                        username={username}
                        dsc={dsc}
                        deletePost={() => {
                            const post = defaultArray[key]['key'];
                            updateArray(array.filter((posts) => posts.key !== post))
                            setCounter(counter - 1);
                            console.log(array)
                        }}
                    />
                ))}
            </StyledFeed>
        </StyledHomepage>
    )
}

export default Homepage;