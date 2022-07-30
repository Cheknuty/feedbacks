import { CategoryButton } from "../categoryButton/categoryButton.component"
import { LikeButton } from "../likeButton/likeButton.component"
import  messageIcon  from "../../assets/img/message.svg"
import { FeedbackBox, FeedbackContent, FeedbackMessage, FeedbackMessageIcon, FeedbackSubtitle, FeedbackTitle, FeedbackWrapper } from "./feedback.style"


export const Feedback = ( props ) => {
    return (
        <FeedbackWrapper>

            <FeedbackBox>
                <LikeButton likes={props?.upvotes}/>
                <FeedbackContent>
                    <FeedbackTitle>{props?.title}</FeedbackTitle>
                    <FeedbackSubtitle>{props?.description}</FeedbackSubtitle>
                    <CategoryButton  category={props?.category}/>
                </FeedbackContent>
            </FeedbackBox>

            <FeedbackMessage>
                <FeedbackMessageIcon src={messageIcon} />
                {props?.comments?.length}
            </FeedbackMessage>

        </FeedbackWrapper>
    )
}