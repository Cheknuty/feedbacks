import styled from "styled-components";
import selectUp from "../../assets/img/blueUp.svg"
import selectDown from "../../assets/img/blueDown.svg"

export const AddFeedbackWrapper = styled.div`
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
`

export const AddFeedbackContent = styled.div`
    margin-top: 68px;
    background-color: #FFFFFF;
    border-radius: 10px;
    position: relative;
    padding: 52px 42px 40px 42px;
`

export const AddFeedbackIcon = styled.img`
    position: absolute;
    left: 42px;
    top: -28px;
`
export const AddFeedbackTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #3A4374;
`

export const AddFeedbackForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content;
`

export const AddFeedbackFormLabel = styled.label`
    &:not(:last-child) {
        margin-bottom: 24px;
    }

    &:last-child {
        margin-bottom: 32px;
    }
`

export const AddFeedbackFormTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 2px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3A4374;
`

export const AddFeedbackFormDesc = styled.p`
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 20px;

    & + div{
        cursor: pointer;
        & div {
            background-repeat: no-repeat;
            background-position-y: center;
            background-position-x: calc(100% - 24px);
        }

        &[data-active = "true"] div {
            background-image: url(${selectUp});
        }

        &[data-active = "false"] div {
            background-image: url(${selectDown});
        }

        & ul {
            top: 60px;
        }
    }
`

export const AddFeedbackFormInput = styled.input`
    width: 100%;
    background-color: #F7F8FD;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 12px 12px 14px 24px;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;

    &:focus {
        outline:1px solid #4661E6;
    }
`

export const AddFeedbackFormSelect = styled.div`
    width: 100%;
    padding: 12px 12px 14px 24px;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;
    background-color: #F7F8FD;
    border-radius: 5px;
`

export const AddFeedbackFormTextArea = styled.textarea`
    background-color: #F7F8FD;
    border-radius: 5px;
    border: 1px solid transparent;
    width: 100%;
    height: 96px;
    resize: none;
    padding: 10px 10px 10px 24px;

    &:focus {
        outline:1px solid #4661E6;
    }
`

export const AddFeedbackBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;

    & a {
        text-decoration: none;
    }

    & button:first-child {
        margin-right: 16px;
    }
`