type DivMainType = HTMLElement | null 

let main_page_div: DivMainType = document.querySelector(".main-page");
let contentNumber: number = document.querySelectorAll(".main-content").length;
let main_page_content: NodeListOf<Element> = document.querySelectorAll(".main-page-content");
let main_page_content_number: number = main_page_content.length;
let position_x_saved: number = parseInt(sessionStorage.getItem("positionX") as string);



// scroll page based on the last saved position gallery
let scroll_position: number = position_x_saved ? position_x_saved : 0


const move_page = (): void => {
    if (main_page_div){
        main_page_div.style.transform = "translateX(-" + String(scroll_position) + "vw)";
    }
}


const update_scroll_position = (destination: number): void => {
     // update scroll position based on scroll
    if (destination > 0){  
        scroll_position = (scroll_position < (contentNumber - 1) * 100 + 80) ? scroll_position + 10: (contentNumber - 1) * 100 + 80;
    }
    else{
        scroll_position = (scroll_position == 0) ? 0 : scroll_position - 10;
    }
    move_page();
};

const filter_current_gallery = (): void => {
    // update gallery based on scroll position
    
    main_page_content.forEach(mpc => mpc.classList.remove("active"));

    // get which part is active
    if (scroll_position - 40 >= 0){
        var div_active_index: number = Math.floor((scroll_position - 40) / 100);

        main_page_content[div_active_index].classList.add("active");
    }

    const welcome_part_section: DivMainType = document.querySelector(".welcome-part");
    const scroll_command_section: DivMainType = document.querySelector(".scroll-command");
    if (welcome_part_section && scroll_command_section){
        welcome_part_section.style.filter = (scroll_position - 80 >= -40) ? "brightness(10%)" : "none";
        scroll_command_section.style.opacity = (scroll_position - 80 >= -40) ? "0" : "1";
    }
};



window.addEventListener("load", e => {
    move_page();
    filter_current_gallery();
    if (screen.width <= 768) {
        const welcome_part_section: DivMainType = document.querySelector(".welcome-part");
        const scroll_command_section: DivMainType = document.querySelector(".scroll-command");
        welcome_part_section.style.filter = "none"
        scroll_command_section.style.opacity = "1";
    }
    else{
        move_page();
        filter_current_gallery();
    }
    
    window.addEventListener("resize", e => {
        if (screen.width <= 768) {
            const welcome_part_section: DivMainType = document.querySelector(".welcome-part");
            const scroll_command_section: DivMainType = document.querySelector(".scroll-command");
            welcome_part_section.style.filter = "none"
            scroll_command_section.style.opacity = "1";
        }
        else{
            move_page();
            filter_current_gallery();
        }
    })
    const welcome_part_section: DivMainType = document.querySelector(".welcome-part");

    if (main_page_div){
        main_page_div.addEventListener("wheel", e => {
            if (screen.width > 768){
                var destination: number = e.deltaY;
                // update scroll position
                update_scroll_position(destination);
    
                // filter container that can be clicked
                filter_current_gallery();
            
                
            }
            else{
                main_page_div.style.transform = "translateX(0)";
                welcome_part_section.style.filter = "none"
            }
            // update position in session storage 
            sessionStorage.setItem("positionX", String(scroll_position));
        });
    }
    
    if (welcome_part_section){
        welcome_part_section.addEventListener("wheel", e => {
            if (screen.width > 768){
                var destination: number = e.deltaY;
                // update scroll position
                update_scroll_position(destination);
    
                // filter container that can be clicked
                filter_current_gallery();
            
                // update position in session storage 
                sessionStorage.setItem("positionX", String(scroll_position));
            }
            else{
                main_page_div.style.transform = "translateX(0)";
                welcome_part_section.style.filter = "none"
            }
            // update position in session storage 
            sessionStorage.setItem("positionX", String(scroll_position));
        });
    }
    // update position in session storage
    sessionStorage.setItem("positionX", String(scroll_position));
});






let btns: NodeListOf<HTMLElement> = document.querySelectorAll(".dest");
let loading_div: DivMainType = document.querySelector(".loading-close");
let close_div: DivMainType = document.querySelector(".close");



btns.forEach(
    btn => btn.addEventListener("click", () => {
        
        // cover page with close div
        if (loading_div){
            loading_div.classList.remove("remove");
            loading_div.classList.add("active");
            loading_div.style.zIndex = "100000";
            
            if (close_div){
                // redirect page when animation is done
                close_div.addEventListener("animationend", () => {
                    window.location.href = btn.dataset.location as string;
                })
            }
        }
    })
);