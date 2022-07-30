import bulbIcon from "../../assets/img/bulb.svg"
import { Button1 } from "../button1/button1.component"
import { HeaderBox, HeaderIcon, HeaderSelctHeadSpan, HeaderSelectHead, HeaderTitle, HeaderWrapper } from "./header.style"
import { useSelector } from "react-redux"
import { useState } from "react"
import { CustomSelect } from "../customSelect/customSelect.component"
import { Link } from "react-router-dom"
export const Header = () => {
    const [value, setValue] = useState("Most Upvotest")
    const arr = [
        {name: "Most Upvotest"},
        {name: "Least Upvotes"},
        {name: "Most Comments"},
        {name: "Least Comments"}
    ]
    return (
        <HeaderWrapper>
            <HeaderBox>
                <HeaderIcon src={bulbIcon} />
                <HeaderTitle>6 Suggestions</HeaderTitle>
                <CustomSelect setValue={setValue} values={arr}>
                    <HeaderSelectHead>Sorty by: <HeaderSelctHeadSpan>{value}</HeaderSelctHeadSpan></HeaderSelectHead>
                </CustomSelect>
            </HeaderBox>
            <Link to={"/add-feedback"}><Button1 text={"+ Add Feedback"}/></Link>
        </HeaderWrapper>
    )
}