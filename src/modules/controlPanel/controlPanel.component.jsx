import { Link } from "react-router-dom"
import { CategoryButton } from "../../components/categoryButton/categoryButton.component"
import { ControlPanelBottom } from "../../components/controlPanelBottom/controlPanelBottom.component"
import { ControlPanelMiddle } from "../../components/controlPanelMiddle/controlPanelMiddle.component"
import { ControlPanelTop } from "../../components/controlPanelTop/controlPanelTop.component"
import { ControlPanelWrapper } from "./controlPanel.style"


export const ControlPanel = () => {
    return (
        <ControlPanelWrapper>
            <ControlPanelTop />
            <ControlPanelMiddle />
            <ControlPanelBottom />

        </ControlPanelWrapper>
    )
}