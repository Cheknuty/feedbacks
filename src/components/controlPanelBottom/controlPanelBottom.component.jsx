import { Link } from "react-router-dom"
import { ControlPanelBottomLink, ControlPanelBottomTitle, ControlPanelBottomWrapper, ControlPanelItem, ControlPanelItemDesc, ControlPanelItemNum, ControlPanelList } from "./controlPanelBottom.style"


export const ControlPanelBottom = () => {
    return(
        <ControlPanelBottomWrapper>
            <ControlPanelBottomTitle>Roadmap</ControlPanelBottomTitle>
                <ControlPanelBottomLink><Link to={"/roadmap"}>View</Link></ControlPanelBottomLink>
                <ControlPanelList>
                    <ControlPanelItem>
                        <ControlPanelItemDesc>Planned</ControlPanelItemDesc>
                        <ControlPanelItemNum>2</ControlPanelItemNum>
                    </ControlPanelItem>
                    <ControlPanelItem>
                        <ControlPanelItemDesc>In-Progress</ControlPanelItemDesc>
                        <ControlPanelItemNum>3</ControlPanelItemNum>
                    </ControlPanelItem>
                    <ControlPanelItem>
                        <ControlPanelItemDesc>Live</ControlPanelItemDesc>
                        <ControlPanelItemNum>1</ControlPanelItemNum>
                    </ControlPanelItem>
                </ControlPanelList>
        </ControlPanelBottomWrapper>
    )
}