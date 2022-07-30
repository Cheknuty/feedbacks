import { Button1 } from "../button1/button1.component"
import { PostCommentFooterDesc, PostCommentFooterForm, PostCommentFooterTextarea, PostCommentFooterTitle } from "./postCommentFooter.style"


export const PostCommentFooter = () => {
    return (
        <PostCommentFooterForm>
            <PostCommentFooterTitle>Add Comment</PostCommentFooterTitle>
            <PostCommentFooterTextarea placeholder="Type your comment here" />
            <PostCommentFooterDesc>225 characters left</PostCommentFooterDesc>
            <Button1 text={"Post Comment"} />
        </PostCommentFooterForm>
    )

}