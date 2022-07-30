import styled from "styled-components";
import lightBack from "../../assets/img/lightBack.svg"

export const GoBackButtonLightWrapper = styled.button`
    background-color: transparent;
    border: none;
    background-image: url(${lightBack});
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: center;

    &:hover {
        text-decoration: underline;
    }

    & a {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
        color: #647196;
        padding-left: 16px;

    }
`