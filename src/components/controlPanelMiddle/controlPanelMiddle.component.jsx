import { useSelector } from "react-redux"
import { CategoryButton } from "../categoryButton/categoryButton.component"
import { ControlPanelMiddleWrapper } from "./controlPanelMiddle.style"

export const ControlPanelMiddle = () => {
    const suggestionsFilters = useSelector(state => state.suggestionsFilters.suggestionsFilters)
    return (
        <ControlPanelMiddleWrapper>
            <CategoryButton category={"All"} />
            {
                suggestionsFilters.map(suggestionFilter => <CategoryButton key={suggestionFilter?.id} category={suggestionFilter?.name} />)
            }
        </ControlPanelMiddleWrapper>
    )
}