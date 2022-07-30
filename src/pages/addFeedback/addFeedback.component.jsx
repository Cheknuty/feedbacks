import { useState } from "react"
import { useSelector } from "react-redux"
import { CustomSelect } from "../../components/customSelect/customSelect.component"
import { GoBackButtonLight } from "../../components/goBackButtonLight/goBackButtonLight.component"
import { AddFeedbackBox, AddFeedbackContent, AddFeedbackForm, AddFeedbackFormDesc, AddFeedbackFormInput, AddFeedbackFormLabel, AddFeedbackFormSelect, AddFeedbackFormTextArea, AddFeedbackFormTitle, AddFeedbackFormWarning, AddFeedbackIcon, AddFeedbackTitle, AddFeedbackWrapper } from "./addFeedback.style"
import plusIcon from "../../assets/img/add.svg"
import { Button3 } from "../../components/button3/button3.component"
import { Button1 } from "../../components/button1/button1.component"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { newFeedback } from "../../store/feedbackSlice"
export const AddFeedback = () => {
    const [value, setValue] = useState("Feature")
    const suggestions = useSelector(state => state.suggestionsFilters.suggestionsFilters)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const addFeedback = (e) => {
        e.preventDefault()
        const el = e.target.elements;
        const title = el[0].value;
        const category = value;
        const description = el[1].value;
        dispatch(newFeedback({title, category, description}))
        nav("../")
        e.target.reset()
    }

    return (
        <AddFeedbackWrapper>
            <GoBackButtonLight to={"/"} />
            <AddFeedbackContent>
                <AddFeedbackIcon src={plusIcon} />
                <AddFeedbackTitle>Create New Feedback</AddFeedbackTitle>
                <AddFeedbackForm action="#" method="POST" onSubmit={addFeedback}>

                    <AddFeedbackFormLabel>
                        <AddFeedbackFormTitle>Feedback Title</AddFeedbackFormTitle>
                        <AddFeedbackFormDesc>Add a short, descriptive headline</AddFeedbackFormDesc>
                        <AddFeedbackFormInput required type={"text"} />
                    </AddFeedbackFormLabel>

                    <AddFeedbackFormLabel>
                        <AddFeedbackFormTitle>Category</AddFeedbackFormTitle>
                        <AddFeedbackFormDesc>Choose a category for your feedback</AddFeedbackFormDesc>
                        <CustomSelect setValue={setValue} values={suggestions}>
                            <AddFeedbackFormSelect>{value}</AddFeedbackFormSelect>
                        </CustomSelect>
                    </AddFeedbackFormLabel>

                    <AddFeedbackFormLabel>
                        <AddFeedbackFormTitle>Feedback Detail</AddFeedbackFormTitle>
                        <AddFeedbackFormDesc>Include any specific comments on what should be improved, added, etc.</AddFeedbackFormDesc>
                        <AddFeedbackFormTextArea required/>
                    </AddFeedbackFormLabel>

                    <AddFeedbackBox>
                        <Link to={"/"}>
                            <Button3 text={"Cancel"} />
                        </Link>
                        <Button1 text={"Add Feedback"} />
                    </AddFeedbackBox>

                </AddFeedbackForm>
            </AddFeedbackContent>
        </AddFeedbackWrapper>
    )
}