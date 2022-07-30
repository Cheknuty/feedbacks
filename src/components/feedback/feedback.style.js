import styled from "styled-components";

export const FeedbackWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 28px 32px;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    cursor: pointer;
    color: #647196;
    

    &:hover h3{
        color: #4661E6;
    }
`

export const FeedbackBox = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    grid-column-gap: 40px;
    align-items: start;
`

export const FeedbackContent = styled.div`
    
`

export const FeedbackTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
    margin-bottom: 4px;

`

export const FeedbackSubtitle = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 12px;
`

export const FeedbackMessage = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    grid-column-gap: 6px;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3A4374;
`

export const FeedbackMessageIcon = styled.img``