let berbagai_manfaat: NodeListOf<HTMLElement> = document.querySelectorAll(".content-berbagai-manfaat")
let image_berbagai_manfaat: NodeListOf<HTMLElement> = document.querySelectorAll(".image")
let topics: NodeListOf<HTMLElement> = document.querySelectorAll(".topic")

console.log(image_berbagai_manfaat)
const is_fully_visible_berbagai_manfaat = (element: HTMLElement): boolean => {
    let rect            : DOMRect   = element.getBoundingClientRect();
    let top_distance    : number    = rect.top;
    let bottom_distance : number    = rect.bottom;
    let is_visible      : boolean

    
    is_visible = bottom_distance <= window.innerHeight && top_distance <= window.innerHeight;
    return is_visible;
}


const update_berbagai_manfaat = (): void => {
    for (let index = 0; index < berbagai_manfaat.length; index++) {
        if (is_fully_visible_berbagai_manfaat(berbagai_manfaat[index])){
            berbagai_manfaat[index].classList.add("active")
            image_berbagai_manfaat[index].classList.add("active")
            topics[index].classList.add("active")
        }        
        else{
            berbagai_manfaat[index].classList.remove("active")
            
            image_berbagai_manfaat[index].classList.remove("active")
            topics[index].classList.remove("active")
        }
    }
}

if (berbagai_manfaat){
    window.addEventListener("scroll", update_berbagai_manfaat)
}
