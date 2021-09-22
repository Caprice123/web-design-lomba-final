let loading_section: Element = document.querySelector("section.loading") as HTMLElement;

const loading_part = (): void => {
    if (load_type != 1 && first_time){
        console.log("removing")
        loading_section.classList.add("remove");
    }
    sessionStorage.setItem("first_time", "1");
    const move_page = (destination: string): void => {
        if (loading_section.classList.contains("active") && destination){
            (loading_section as HTMLElement).removeAttribute("style");
            (loading_section as HTMLElement).style.zIndex = "10000";
            window.location.href = destination;
        }
        else{
            (loading_section as HTMLElement).style.zIndex = "-1";
        }
    }

    let close_div: Element = document.querySelector(".close") as HTMLElement;
    close_div.addEventListener("animationend", () => {
        move_page(null)
    });

    let back: Element = document.querySelector(".home") as HTMLElement;
    back.addEventListener("click", () => {
        (loading_section as HTMLElement).style.zIndex = "10000";
        loading_section.classList.remove("remove")
        loading_section.classList.add("active");
        close_div.addEventListener("animationend", () => {
            move_page("index.html")
        });
    });
    let destinations: NodeListOf<HTMLElement> = document.querySelectorAll(".navigation-destination")
    let back_page: HTMLElement = document.querySelector(".back-page")
    let next_page: HTMLElement= document.querySelector(".next-page")

   

    let location_now = window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
    destinations.forEach(
        destination => destination.addEventListener("click", e=> {
            if (location_now != destination.dataset.location){
                (loading_section as HTMLElement).removeAttribute("style");
                (loading_section as HTMLElement).style.zIndex = "10000";
                loading_section.classList.add("active");
                close_div.addEventListener("animationend", e => {
                    move_page(destination.dataset.location)
                });
            }
        })
    )
    back_page.addEventListener("click", () => {
        (loading_section as HTMLElement).style.zIndex = "10000";
        loading_section.classList.add("active");
        close_div.addEventListener("animationend", e => {
            move_page((back_page as HTMLElement).dataset.location)
        });
    })

    next_page.addEventListener("click", () => {
        (loading_section as HTMLElement).style.zIndex = "10000";
        loading_section.classList.add("active");
        close_div.addEventListener("animationend", e => {
            move_page((next_page as HTMLElement).dataset.location)
        });
    })
}

let load_type: number = performance.navigation.type
let first_time: number = parseInt((sessionStorage.getItem("first_time")))
console.log(load_type, first_time)
if (load_type == 1 || isNaN(first_time)){
    loading_section.classList.remove("remove");
    (loading_section as HTMLElement).style.zIndex = "-1";
}