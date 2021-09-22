
type QueryAllType = NodeListOf<HTMLElement>;

let revolutions: QueryAllType = document.querySelectorAll(".text-container")
let images: QueryAllType = document.querySelectorAll(".image")
let lighting: QueryAllType = document.querySelectorAll(".light")
let text: QueryAllType = document.querySelectorAll(".text-revolusi")

const is_fully_visible_revolution = (element: HTMLElement): boolean => {
    let rect            : DOMRect   = element.getBoundingClientRect();
    let top_distance    : number    = rect.top;
    let bottom_distance : number    = rect.bottom;
    let is_visible      : boolean

    
    is_visible = bottom_distance <= window.innerHeight && top_distance <= window.innerHeight;
    return is_visible;
}

const update_journey = ():void => {
    for (let index = 0; index < revolutions.length; index++) {
        if (is_fully_visible_revolution(revolutions[index])){
            revolutions[index].classList.add("active")
            images[index].classList.add("active")
            lighting[index].classList.add("active")
            text[index].classList.add("active")
        }
        else{
            revolutions[index].classList.remove("active")
            lighting[index].classList.remove("active")
            images[index].classList.remove("active")
            text[index].classList.remove("active")
        }
        
    }
}


if (revolutions){
    window.addEventListener("scroll", update_journey)
}