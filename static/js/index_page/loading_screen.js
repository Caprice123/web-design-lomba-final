var load = null;
var load_number = null;
var load_progress = null;
var animation_welcome = null;
var progress_number = null;
var update_loading_screen = function () {
    load = document.querySelector(".pace-progress");
    load_number = document.querySelector(".loading-text");
    // make pace.js become invisible
    if (load) {
        load.style.display = "none";
        // if there is load number then update the number load digit
        if (load_number) {
            if (load_interval)
                clearInterval(load_interval);
            load_progress = setInterval(update_loading_number, 10);
        }
    }
};
var update_loading_number = function () {
    if (load) {
        progress_number = parseInt(load.getAttribute("data-progress-text"));
    }
    if (load_number) {
        load_number.textContent = String(progress_number) + "%";
    }
    // if already 100% remove the loading screen and show the welcome part
    if (progress_number == 100) {
        clearInterval(load_progress);
        setTimeout(remove_loading_screen, 1000);
    }
};
var remove_loading_screen = function () {
    content_section = document.querySelector("section.content");
    welcome_section = document.querySelector(".welcome-part");
    main_page_section = document.querySelector(".main-page");
    load_section = document.querySelector("section.loader");
    // remove the load and show the content 
    if (load_section) {
        load_section.classList.add("hidden");
    }
    if (content_section) {
        content_section === null || content_section === void 0 ? void 0 : content_section.classList.add("active");
    }
    // animate the parallelogram in welcome part
    var head_parallelogram = document.querySelector(".head-welcome-parallelogram");
    var container_parallelogram = document.querySelector(".container-parallelogram");
    if (head_parallelogram && container_parallelogram) {
        animation_welcome = setInterval(function () {
            head_parallelogram.classList.toggle("on-animation");
            container_parallelogram.classList.toggle("on-animation");
        }, 1000);
    }
};
var load_section = null;
var content_section = null;
var welcome_section = null;
var main_page_section = null;
var close_page_section = null;
var page_load_type = performance.navigation.type; // 1 reload 0 redirect 2 backward 255 otherway
var load_interval = null;
var first_time_load = parseInt((sessionStorage.getItem("first_time")));
var remove_load_screen = null;
var remove_welcome_load_screen = null;
var run_main_page = null;
console.log(first_time_load);
sessionStorage.setItem("last_location", "index");
if (page_load_type == 1 || isNaN(first_time_load)) {
    load_interval = setInterval(update_loading_screen, 10);
    // save that page is not first time load
    sessionStorage.setItem("first_time", "1");
    // reset the position of gallery
    sessionStorage.setItem("positionX", "0");
}
else {
    // save that page is not first time load
    sessionStorage.setItem("first_time", "1");
    // remove loading screen
    remove_load_screen = setInterval(function () {
        load = document.querySelector(".pace-progress");
        if (load) {
            load.style.display = "none";
            clearInterval(remove_load_screen);
        }
    }, 10);
    // remove welcome screen
    remove_welcome_load_screen = setInterval(function () {
        load_section = document.querySelector("section.loader");
        content_section = document.querySelector("section.content");
        if (load_section && content_section) {
            load_section.style.transition = content_section.style.transition = "0s";
            load_section.classList.add("hidden");
            content_section.classList.add("active");
            clearInterval(remove_welcome_load_screen);
        }
    }, 10);
    // run the main page 
    run_main_page = setInterval(function () {
        welcome_section = document.querySelector(".welcome-part");
        main_page_section = document.querySelector(".main-page");
        close_page_section = document.querySelector(".loading-close");
        if (welcome_section && main_page_section && close_page_section) {
            var head_parallelogram_1 = document.querySelector(".head-welcome-parallelogram");
            var container_parallelogram_1 = document.querySelector(".container-parallelogram");
            if (head_parallelogram_1 && container_parallelogram_1) {
                animation_welcome = setInterval(function () {
                    head_parallelogram_1.classList.toggle("on-animation");
                    container_parallelogram_1.classList.toggle("on-animation");
                }, 1000);
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
            var close_div_1 = document.querySelector(".close");
            if (close_div_1) {
                close_div_1.addEventListener("animationend", function () {
                    if (close_page_section) {
                        close_page_section.style.zIndex = (close_page_section.classList.contains("remove")) ? "-1" : "100000";
                    }
                });
            }
            clearInterval(run_main_page);
        }
    });
}
