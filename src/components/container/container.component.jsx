import { ContainerWrapper } from "./container.style"


export const Container = ({children}) => {
    return(
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}