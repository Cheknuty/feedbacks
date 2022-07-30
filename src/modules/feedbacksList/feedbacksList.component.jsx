import { Feedback } from "../../components/feedback/feedback.component"
import { Header } from "../../components/header/header.component"
import { FeedbacksListBox, FeedbacksListWrapper } from "./feedbacksList.style"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const FeedbacksList = () => {
    const feedbacks = useSelector(state => state.feedbacks.feedbacks)
    const status = useSelector(state => state.feedbacks.status)
    return (
        <FeedbacksListWrapper>
            <Header />
            <FeedbacksListBox>
                {
                    status == "loading" ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : 
                    feedbacks.map(feedback => (
                        <Link key={feedback.id} to={`/post-comment/${feedback.id}`}><Feedback {...feedback}/></Link>
                    ))
                }

            </FeedbacksListBox>
        </FeedbacksListWrapper>
    )
}