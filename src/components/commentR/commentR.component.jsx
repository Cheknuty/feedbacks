import { useRef } from "react"
import { replyButtonHandler } from "../../utils/replyButtonHandler"
import { Reply } from "../reply/reply.component"
import { ReplyPanel } from "../replyPanel/replyPanel.component"
import {
    CommentRFooter,
    CommentRItem,
    CommentRItemAvatar,
    CommentRItemBox,
    CommentRItemButton,
    CommentRItemContent,
    CommentRItemHeader,
    CommentRItemLine,
    CommentRItemName,
    CommentRItemNick,
    CommentRReplies
} from "./commentR.style"


export const CommentR = ({comment}) => {
    const targetRef = useRef()

    return (
        <CommentRItem data-target="comment" id={comment.id} ref={targetRef}>

            <CommentRItemHeader>
                <CommentRItemBox>
                    <CommentRItemAvatar src={comment.user.image} />
                    <CommentRItemName>{comment.user.name} with reply</CommentRItemName>
                    <CommentRItemNick>@{comment.user.username}</CommentRItemNick>
                </CommentRItemBox>
                <CommentRItemButton onClick={() => replyButtonHandler(targetRef)}>Reply</CommentRItemButton>
            </CommentRItemHeader>

            <CommentRFooter>
                <CommentRItemContent>{comment.content}</CommentRItemContent>
                <ReplyPanel />
            </CommentRFooter>

            <CommentRReplies>
                {
                    comment.replies.map(reply => <Reply reply={reply} key={reply.id} />)
                }
            </CommentRReplies>

            <CommentRItemLine />

        </CommentRItem>
    )
}