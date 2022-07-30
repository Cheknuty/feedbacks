import { ControlPanel } from "../../modules/controlPanel/controlPanel.component"
import { FeedbacksList } from "../../modules/feedbacksList/feedbacksList.component"
import { HomeWrapper } from "./home.style"
import { useSelector } from "react-redux"

export const Home = () => {
    const {status, error} = useSelector(state => state.feedbacks)
    return (
            <HomeWrapper>
                <ControlPanel />
                <FeedbacksList />
            </HomeWrapper>
    )
}