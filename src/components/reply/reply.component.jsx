import { useRef } from "react"
import { replyButtonHandler } from "../../utils/replyButtonHandler"
import { ReplyPanel } from "../replyPanel/replyPanel.component"
import {
    ReplyItem,
    ReplyItemAvatar,
    ReplyItemBox,
    ReplyItemButton,
    ReplyItemContent,
    ReplyItemContentTo,
    ReplyItemFooter,
    ReplyItemHeader,
    ReplyItemName,
    ReplyItemNick,
} from "./reply.style"


export const Reply = ({reply}) => {
    const targetRef = useRef()

    return (
        <ReplyItem data-target="reply" id={reply.id} ref={targetRef}>
            <ReplyItemHeader>
                <ReplyItemBox>
                    <ReplyItemAvatar src={reply?.user?.image} />
                    <ReplyItemName>{reply?.user?.name}</ReplyItemName>
                    <ReplyItemNick>@{reply?.user?.username}</ReplyItemNick>
                </ReplyItemBox>
                <ReplyItemButton onClick={() => replyButtonHandler(targetRef)}>Reply</ReplyItemButton>
            </ReplyItemHeader>
            <ReplyItemFooter>
                <ReplyItemContent><ReplyItemContentTo>@{reply?.replyingTo}</ReplyItemContentTo> {reply?.content}</ReplyItemContent>
                <ReplyPanel />
            </ReplyItemFooter>
        </ReplyItem>
    )
}