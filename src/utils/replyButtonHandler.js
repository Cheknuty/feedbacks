

export const replyButtonHandler = (targetRef) => {
    const target = targetRef.current
    const targets = target.closest("ul").childNodes
    
    if(target.querySelector("form").dataset.active == "true") target.querySelector("form").setAttribute("data-active","false")

    else {
        targets.forEach(item => {
            item.id != target.id ? item.querySelector("form").setAttribute("data-active", "false") : item.querySelector("form").setAttribute("data-active", "true")
        });    
    }


    // if(target.dataset.target == "comment"){
        
    // }
    // else if(target.dataset.target == "reply"){
      
    // }
} 