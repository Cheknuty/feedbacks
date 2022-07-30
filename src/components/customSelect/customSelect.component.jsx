import React, { useRef } from "react"
import { CustomSelectDropDown, CustomSelectDropDownItemWrapper, CustomSelectWrapper } from "./customSelect.style"

export const CustomSelect = ({children, setValue, values}) => {
    const ref = useRef()
    const clickHandler = () => {
        if(ref.current.dataset.active == "true") {
            ref.current.setAttribute("data-active", false)
        } else {
            ref.current.setAttribute("data-active", true)
        }
    } 

    return (
        <CustomSelectWrapper ref={ref} data-active={false}  onClick={clickHandler}>
            {children}
            <CustomSelectDropDown>
                {
                    values.map((value, idx) => 
                        <CustomSelectDropDownItem key={idx} setValue={setValue} dataActive={ idx==0 ? true : false}>{value.name}</CustomSelectDropDownItem>
                    )
                }
            </CustomSelectDropDown>
        </CustomSelectWrapper>
    )
}

const CustomSelectDropDownItem = ({children, dataActive, setValue}) => {
    const ref = useRef()

    const selectHandler = () => {
        const target = ref.current
        const targets = target.closest("ul").childNodes
        target.setAttribute("data-active", "true")
        setValue(target.textContent)
        targets.forEach(item => {
            if(target.textContent != item.textContent) {
                item.setAttribute("data-active", "false")
            }
        });

    }

    return(
        <CustomSelectDropDownItemWrapper onClick={selectHandler} ref={ref} data-active={dataActive}>{children}</CustomSelectDropDownItemWrapper>
    )
}