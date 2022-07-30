import styled from "styled-components"

export const ReplyPanelWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-column-gap: 16px;
    align-items: start;
    display: none;

    &[data-active="true"] {
        display: grid;
    }
`

export const ReplyPanelTextarea = styled.textarea`
    height: 80px;
    resize: none;
    border: none;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;
    padding: 16px 24px;
    background-color: #F7F8FD;
    border-radius: 5px;

    &:focus {
        outline: 1px solid #4661E6;
    }
`