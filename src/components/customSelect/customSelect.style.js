import styled from "styled-components";
import selctDown from "../../assets/img/selectDown.svg"
import selctTop from "../../assets/img/selectTop.svg"
import selected from "../../assets/img/selected.svg"
export const CustomSelectWrapper = styled.div`
    position: relative;

    &[data-active = "true"] {
        & ul {
            display: block;
        }
    }
`

export const CustomSelectDropDown = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
    border-radius: 10px;
    position: absolute;
    width: 100%;
    display: none;
`


export const CustomSelectDropDownItemWrapper = styled.li`
    padding: 12px 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    cursor: pointer;
    
    &:not(:last-child) {
        border-bottom: 1px solid rgba(117, 247, 137, 0.15);
    }

    &:hover {
        color: #AD1FEA;
    }

    &[data-active = "true"] {
        background-image: url(${selected});
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: calc(100% - 24px);

    }
`