import { Link } from "react-router-dom"
import { GoBackButtonLightWrapper } from "./goBackButtonLight.style"


export const GoBackButtonLight = ({to}) => {
    return (
        <GoBackButtonLightWrapper>
            <Link to={to}>
                Go Back
            </Link>
        </GoBackButtonLightWrapper>
    )
}