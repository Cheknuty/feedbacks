import { LikeButtonWrapper } from "./likeButton.style"


export const LikeButton = ({likes}) => {
    return (
        <LikeButtonWrapper onClick={(e) => e.preventDefault()}>
            {likes}
        </LikeButtonWrapper>
    )
}