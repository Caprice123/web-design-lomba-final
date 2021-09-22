var loading_section = document.querySelector("section.loading");
var loading_part = function () {
    if (load_type != 1 && first_time) {
        // console.log("removing")
        loading_section.classList.add("remove");
    }
    sessionStorage.setItem("first_time", "1");
    var move_page = function (destination) {
        if (loading_section.classList.contains("active") && destination) {
            loading_section.removeAttribute("style");
            loading_section.style.zIndex = "10000";
            window.location.href = destination;
        }
        else {
            loading_section.style.zIndex = "-1";
        }
    };
    var close_div = document.querySelector(".close");
    close_div.addEventListener("animationend", function () {
        move_page(null);
    });
    var back = document.querySelector(".home");
    back.addEventListener("click", function () {
        loading_section.style.zIndex = "10000";
        loading_section.classList.remove("remove");
        loading_section.classList.add("active");
        close_div.addEventListener("animationend", function () {
            move_page("index.html");
        });
    });
    var destinations = document.querySelectorAll(".navigation-destination");
    var back_page = document.querySelector(".back-page");
    var next_page = document.querySelector(".next-page");
    var location_now = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    destinations.forEach(function (destination) { return destination.addEventListener("click", function (e) {
        if (location_now != destination.dataset.location) {
            loading_section.removeAttribute("style");
            loading_section.style.zIndex = "10000";
            loading_section.classList.add("active");
            close_div.addEventListener("animationend", function (e) {
                move_page(destination.dataset.location);
            });
        }
    }); });
    back_page.addEventListener("click", function () {
        loading_section.style.zIndex = "10000";
        loading_section.classList.add("active");
        close_div.addEventListener("animationend", function (e) {
            move_page(back_page.dataset.location);
        });
    });
    next_page.addEventListener("click", function () {
        loading_section.style.zIndex = "10000";
        loading_section.classList.add("active");
        close_div.addEventListener("animationend", function (e) {
            move_page(next_page.dataset.location);
        });
    });
};
var load_type = performance.navigation.type;
var first_time = parseInt((sessionStorage.getItem("first_time")));
// console.log(load_type, first_time)
if (load_type == 1 || isNaN(first_time)) {
    loading_section.classList.remove("remove");
    loading_section.style.zIndex = "-1";
}
