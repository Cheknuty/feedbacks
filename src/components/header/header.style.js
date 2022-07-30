import styled from "styled-components";
import selectUp from "../../assets/img/selectTop.svg"
import selectDown from "../../assets/img/selectDown.svg"


export const HeaderWrapper  = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #373F68;
    border-radius: 10px;
    justify-content: space-between;
    padding: 14px 16px 14px 24px;

    & a {
        text-decoration: none;
    }
`

export const HeaderIcon = styled.img`
    margin-right: 16px;
`

export const HeaderTitle = styled.h2`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #FFFFFF;
    margin-right: 38px;

    & + div {
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: calc(100% - 24px);

        &[data-active = "true"] {
            background-image: url(${selectUp});
        }

        &[data-active = "false"] {
            background-image: url(${selectDown});
        }
    }
`

export const HeaderSelectHead = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #F2F4FE;
    cursor: pointer;

    &:hover {
        opacity: 0.75;
    }
`

export const HeaderSelctHeadSpan = styled.span`
    font-weight: 700;
`

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;

    & ul {
        top: 60px;
    }

    & div {
        width: 255px;
    }
`