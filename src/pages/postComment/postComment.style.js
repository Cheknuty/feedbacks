import styled from "styled-components";


export const PostCommentWrapper = styled.div`
    max-width: 730px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
`

export const PostCommentButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PostCommentContent = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 24px 32px 16px 32px;

`

export const PostCommentCount = styled.p`
    margin-top: 0;
    margin-bottom: 28px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
`

export const PostCommentList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`