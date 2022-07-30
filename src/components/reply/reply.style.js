import styled from "styled-components"

export const ReplyItem = styled.li`
  
`

export const ReplyItemHeader = styled.header`
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    margin-bottom: 17px;
`

export const ReplyItemBox = styled.div`
    display: grid;
    grid-template-areas: 
    "i t"
    "i n";
    grid-column-gap: 32px;
`

export const ReplyItemAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    grid-area: i;
`

export const ReplyItemName = styled.h5`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3A4374;
    margin: 0;
    grid-area: t;
`

export const ReplyItemNick = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
    margin: 0;
    grid-area: n;
`

export const ReplyItemContent = styled.p`
    margin: 0;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 32px;
`

export const ReplyItemContentTo = styled.span`
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #AD1FEA;
`

export const ReplyItemFooter = styled.div`
    margin-bottom: 32px;
    margin-left: 65px;
`

export const ReplyItemButton = styled.button`
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