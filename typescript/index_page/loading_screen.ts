type LoadingType = HTMLElement | null 
type TimerType = number | null

let load: LoadingType = null
let load_number: LoadingType = null
let load_progress: TimerType = null
let animation_welcome: TimerType = null
let progress_number: number | null = null



const update_loading_screen = (): void => {
    load = document.querySelector(".pace-progress");
    load_number = document.querySelector(".loading-text");
    
    // make pace.js become invisible
    if (load){
        load.style.display = "none";

        // if there is load number then update the number load digit
        if (load_number){
            if (load_interval) clearInterval(load_interval);
            
            load_progress = setInterval(update_loading_number, 10);
        }
    }
}

const update_loading_number = () => {
    if (load){
        progress_number = parseInt(load.getAttribute("data-progress-text") as string);
    }
    if (load_number){
        load_number.textContent = String(progress_number) + "%";
    }
    // if already 100% remove the loading screen and show the welcome part
    if (progress_number == 100){
        clearInterval((load_progress as number));
        setTimeout(remove_loading_screen, 1000);

        
    }
}

const remove_loading_screen = (): void => {
    content_section = document.querySelector("section.content");
    welcome_section = document.querySelector(".welcome-part");
    main_page_section = document.querySelector(".main-page");
    load_section = document.querySelector("section.loader");

    // remove the load and show the content 
    if (load_section){
        load_section.classList.add("hidden");
    }
    if (content_section){
        content_section?.classList.add("active");
    }

    // animate the parallelogram in welcome part
    const head_parallelogram: DivType = document.querySelector(".head-welcome-parallelogram");
    const container_parallelogram: DivType = document.querySelector(".container-parallelogram");

    if (head_parallelogram && container_parallelogram){
        animation_welcome = setInterval(() => {
            head_parallelogram.classList.toggle("on-animation")
            container_parallelogram.classList.toggle("on-animation")
        }, 1000)
    }
}



type SectionType = HTMLElement | null;
type DivType = HTMLElement | null;


let load_section: SectionType = null;
let content_section: SectionType = null;
let welcome_section: SectionType = null;
let main_page_section: SectionType = null;
let close_page_section: SectionType = null;

type PageLoadedType = number
let page_load_type: PageLoadedType = performance.navigation.type; // 1 reload 0 redirect 2 backward 255 otherway
let load_interval: TimerType = null;
let first_time_load: number = parseInt((sessionStorage.getItem("first_time")) as string);

let remove_load_screen: TimerType = null;
let remove_welcome_load_screen: TimerType = null;
let run_main_page: TimerType = null;

console.log(first_time_load)

sessionStorage.setItem("last_location", "index");


if (page_load_type == 1 || isNaN(first_time_load)){
    load_interval = setInterval(update_loading_screen, 10);
    
    // save that page is not first time load
    sessionStorage.setItem("first_time", "1");
    
    // reset the position of gallery
    sessionStorage.setItem("positionX", "0");
}

else{
    // save that page is not first time load
    sessionStorage.setItem("first_time", "1");

    // remove loading screen
    remove_load_screen = setInterval(() => {
        load = document.querySelector(".pace-progress");
        if (load){
            load.style.display = "none";
            clearInterval(remove_load_screen as number);
        }
    }, 10);

    // remove welcome screen
    remove_welcome_load_screen = setInterval(() => {
        load_section = document.querySelector("section.loader");
        content_section = document.querySelector("section.content");

        if (load_section && content_section){
            load_section.style.transition = content_section.style.transition = "0s";
            load_section.classList.add("hidden");

            content_section.classList.add("active");

            clearInterval(remove_welcome_load_screen);
        }
    }, 10);

    // run the main page 
    run_main_page = setInterval(() => {
        welcome_section = document.querySelector(".welcome-part");
        main_page_section = document.querySelector(".main-page");
        close_page_section = document.querySelector(".loading-close");


        if (welcome_section && main_page_section && close_page_section){
            const head_parallelogram: DivType = document.querySelector(".head-welcome-parallelogram");
            const container_parallelogram: DivType = document.querySelector(".container-parallelogram");

            if (head_parallelogram && container_parallelogram){
                animation_welcome = setInterval(() => {
                    head_parallelogram.classList.toggle("on-animation")
                    container_parallelogram.classList.toggle("on-animation")
                }, 1000)
            }
            // remove animation
            close_page_section.classList.add("remove");
            close_page_section.classList.remove("active");

            // remove welcome screen
            welcome_section.style.transition = "opacity 0s, filter 1s";
            welcome_section.classList.add("hidden");

            // show the main page
            main_page_section.style.transition = "opacity 0s, transform 0.5s";
            main_page_section.classList.add("active");

            // control the visibility of the close div after the page is closed
            const close_div: DivType = document.querySelector(".close");
            if (close_div){
                close_div.addEventListener("animationend", () => {
                    if (close_page_section){
                        close_page_section.style.zIndex = (close_page_section.classList.contains("remove"))? "-1" : "100000";
                    }
                })
            }
            
            clearInterval(run_main_page);
        }
    })
}
