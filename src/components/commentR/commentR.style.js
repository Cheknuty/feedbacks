import styled from "styled-components"

export const CommentRItem = styled.li`

    &:not(:last-child) {
        margin-bottom: 32px;

        & hr {
            display: block;
        }
    }

`

export const CommentRItemHeader = styled.header`
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    margin-bottom: 17px;
`

export const CommentRItemBox = styled.div`
    display: grid;
    grid-template-areas: 
    "i t"
    "i n";
    grid-column-gap: 32px;
`

export const CommentRItemAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    grid-area: i;
`

export const CommentRItemName = styled.h4`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3A4374;
    margin: 0;
    grid-area: t;
`

export const CommentRItemNick = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
    margin: 0;
    grid-area: n;
`

export const CommentRItemButton = styled.button`
    border: none;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #4661E6;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const CommentRItemContent = styled.p`
    margin: 0;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 32px;
`

export const CommentRItemLine = styled.hr`
    border: none;
    height: 1px;
    width: 100%;
    background-color: rgba(140, 146, 179, 0.25);
    display: none;
`
export const CommentRFooter = styled.div`
    margin-bottom: 32px;
    margin-left: 70px;
`

export const CommentRReplies = styled.ul`
    position: relative;
    margin-left: 45px;
    list-style: none;
    padding-inline-start: 0;
`