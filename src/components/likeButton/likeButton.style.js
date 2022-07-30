import styled from "styled-components";
import like from "../../assets/img/like.svg"
export const LikeButtonWrapper = styled.button`
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3A4374;
    border-radius: 10px;
    background-color: #F2F4FE;
    background-image: url(${like});
    background-repeat: no-repeat;
    background-position-y: 14px;
    background-position-x: center;
    border: none;
    padding: 26px 9px 8px 9px;
    width: 40px;

    &:hover {
        background-color: #CFD7FF;
    }
`