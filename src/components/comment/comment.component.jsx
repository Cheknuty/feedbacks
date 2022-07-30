import { useRef } from "react"
import { replyButtonHandler } from "../../utils/replyButtonHandler"
import { ReplyPanel } from "../replyPanel/replyPanel.component"
import {
    CommentFooter,
    CommentItem,
    CommentItemAvatar,
    CommentItemBox,
    CommentItemButton,
    CommentItemContent,
    CommentItemHeader,
    CommentItemLine,
    CommentItemName,
    CommentItemNick
} from "./comment.style"


export const Comment = ({comment}) => {
    const commentTarget = useRef()

    return (
        <CommentItem data-target="comment" id={comment.id} ref={commentTarget}>

            <CommentItemHeader>
                <CommentItemBox>
                    <CommentItemAvatar src={comment.user.image} />
                    <CommentItemName>{comment.user.name} with reply</CommentItemName>
                    <CommentItemNick>@{comment.user.username}</CommentItemNick>
                </CommentItemBox>
                <CommentItemButton onClick={() => replyButtonHandler(commentTarget)}>Reply</CommentItemButton>
            </CommentItemHeader>

            <CommentFooter>
                <CommentItemContent>{comment.content}</CommentItemContent>
                <ReplyPanel />
            </CommentFooter>

            <CommentItemLine />

        </CommentItem>
    )
}