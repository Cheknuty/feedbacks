import styled from "styled-components";


export const PostCommentFooterForm = styled.form`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 24px 32px 32px 34px;
    display: grid;
    grid-template-areas: 
    "h2 h2"
    "t t"
    "p b";
    justify-content: space-between;

`

export const PostCommentFooterTextarea = styled.textarea`
    resize: none;
    border: none;
    background: #F7F8FD;
    border-radius: 5px;
    outline: #4661E6;
    padding: 16px 24px;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;
    grid-area: t;
    margin-bottom: 16px;

    &::placeholder {
        color: #8C92B3;
    }
`

export const PostCommentFooterDesc = styled.p`
    font-size: 15px;
    line-height: 22px;
    color: #647196;
    grid-area: p;

    & + button {
        grid-area: b;
    }
`

export const PostCommentFooterTitle = styled.h3`
    margin: 0;
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
    grid-area: h2;
`