import { Link, useParams } from "react-router-dom"
import { GoBackButtonLight } from "../../components/goBackButtonLight/goBackButtonLight.component"
import { Button2 } from "../../components/button2/button2.component"
import { Feedback } from "../../components/feedback/feedback.component"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { CommentR } from "../../components/commentR/commentR.component"
import { Comment } from "../../components/comment/comment.component"
import {
    PostCommentButtons,
    PostCommentContent,
    PostCommentCount,
    PostCommentList,
    PostCommentWrapper,
} from "./postComment.style"
import { PostCommentFooter } from "../../components/postCommentFooter/postCommentFooter.component"

export const PostComment = () => {
    const { id } = useParams()
    const feedback = useSelector(state => state.feedbacks.feedbacks).find(item => item.id == id)
    const [value, setValue] = useState(0)

    useEffect(() => setValue(feedback?.comments?.length), [feedback])

    return (
        <PostCommentWrapper>

            <PostCommentButtons>
                <GoBackButtonLight to={"/"} />
                <Link to={`/edit-feedback/${id}`}>
                    <Button2 text={"Edit Feedback"} />
                </Link>
            </PostCommentButtons>

            <Feedback {...feedback} />

            {
                (feedback?.comments?.length != 0 && feedback?.comments?.length != undefined) &&
                <PostCommentContent>
                    <PostCommentCount>{value} Comments</PostCommentCount>
                    <PostCommentList>
                        {
                            feedback.comments.map((comment, idx) =>
                                (comment?.replise?.length != 0 && comment?.replies?.length != undefined) ?
                                <CommentR comment={comment} key={comment.id}/> : <Comment comment={comment} key={comment.id} />
                            )
                        }
                    </PostCommentList>
                </PostCommentContent>
            }

            <PostCommentFooter />

        </PostCommentWrapper>
    )
}