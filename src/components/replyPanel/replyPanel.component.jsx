import { useParams } from "react-router-dom"

import { Button1 } from "../button1/button1.component"
import { ReplyPanelTextarea, ReplyPanelWrapper } from "./replyPanel.style"



export const ReplyPanel = () => {
    const { id } = useParams()
    return (
        <ReplyPanelWrapper method="POST" action="#" data-active="false">
            <ReplyPanelTextarea type="text" required/>
            <Button1 text={"Post Reply"}/>
        </ReplyPanelWrapper>
    )
}