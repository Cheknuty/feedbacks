import styled from "styled-components";

export const ControlPanelBottomWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 19px 24px 24px 24px;
    display: grid;
    grid-template-rows: 26px 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "t b"
    "l l" ;
    grid-row-gap: 24px;
`

export const ControlPanelBottomLink = styled.div`
    grid-area: b;
    text-align: right;

    & a:hover {
        color: #8397F8;
    }
`

export const ControlPanelBottomTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
    grid-area: t;

    & + a {
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
        text-decoration-line: underline;
        color: #4661E6;
        
    }
`

export const ControlPanelList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    grid-area: l;
    display: grid;
    grid-row-gap: 8px;
    
`

export const ControlPanelItem = styled.li`
    display: flex;
    justify-content: space-between;

    &:nth-child(1) h4 {
        &::before {
            background-color: #F49F85;
        }
    }

    &:nth-child(2) h4 {
        &::before {
            background-color: #AD1FEA;
        }
    }

    &:nth-child(3) h4 {
        &::before {
            background-color: #62BCFA;
        }
    }
`

export const ControlPanelItemNum = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
`

export const ControlPanelItemDesc = styled.h4`
    margin: 0;
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        margin: 0 16px 2px 0;
    }
`