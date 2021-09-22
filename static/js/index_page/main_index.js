var main_page_div = document.querySelector(".main-page");
var contentNumber = document.querySelectorAll(".main-content").length;
var main_page_content = document.querySelectorAll(".main-page-content");
var main_page_content_number = main_page_content.length;
var position_x_saved = parseInt(sessionStorage.getItem("positionX"));
// scroll page based on the last saved position gallery
var scroll_position = position_x_saved ? position_x_saved : 0;
var move_page = function () {
    if (main_page_div) {
        main_page_div.style.transform = "translateX(-" + String(scroll_position) + "vw)";
    }
};
var update_scroll_position = function (destination) {
    // update scroll position based on scroll
    if (destination > 0) {
        scroll_position = (scroll_position < (contentNumber - 1) * 100 + 80) ? scroll_position + 10 : (contentNumber - 1) * 100 + 80;
    }
    else {
        scroll_position = (scroll_position == 0) ? 0 : scroll_position - 10;
    }
    move_page();
};
var filter_current_gallery = function () {
    // update gallery based on scroll position
    main_page_content.forEach(function (mpc) { return mpc.classList.remove("active"); });
    // get which part is active
    if (scroll_position - 40 >= 0) {
        var div_active_index = Math.floor((scroll_position - 40) / 100);
        main_page_content[div_active_index].classList.add("active");
    }
    var welcome_part_section = document.querySelector(".welcome-part");
    var scroll_command_section = document.querySelector(".scroll-command");
    if (welcome_part_section && scroll_command_section) {
        welcome_part_section.style.filter = (scroll_position - 80 >= -40) ? "brightness(10%)" : "none";
        scroll_command_section.style.opacity = (scroll_position - 80 >= -40) ? "0" : "1";
    }
};
window.addEventListener("load", function (e) {
    move_page();
    filter_current_gallery();
    if (screen.width <= 768) {
        var welcome_part_section_1 = document.querySelector(".welcome-part");
        var scroll_command_section = document.querySelector(".scroll-command");
        welcome_part_section_1.style.filter = "none";
        scroll_command_section.style.opacity = "1";
    }
    else {
        move_page();
        filter_current_gallery();
    }
    window.addEventListener("resize", function (e) {
        if (screen.width <= 768) {
            var welcome_part_section_2 = document.querySelector(".welcome-part");
            var scroll_command_section = document.querySelector(".scroll-command");
            welcome_part_section_2.style.filter = "none";
            scroll_command_section.style.opacity = "1";
        }
        else {
            move_page();
            filter_current_gallery();
        }
    });
    var welcome_part_section = document.querySelector(".welcome-part");
    if (main_page_div) {
        main_page_div.addEventListener("wheel", function (e) {
            if (screen.width > 768) {
                var destination = e.deltaY;
                // update scroll position
                update_scroll_position(destination);
                // filter container that can be clicked
                filter_current_gallery();
            }
            else {
                main_page_div.style.transform = "translateX(0)";
                welcome_part_section.style.filter = "none";
            }
            // update position in session storage 
            sessionStorage.setItem("positionX", String(scroll_position));
        });
    }
    if (welcome_part_section) {
        welcome_part_section.addEventListener("wheel", function (e) {
            if (screen.width > 768) {
                var destination = e.deltaY;
                // update scroll position
                update_scroll_position(destination);
                // filter container that can be clicked
                filter_current_gallery();
                // update position in session storage 
                sessionStorage.setItem("positionX", String(scroll_position));
            }
            else {
                main_page_div.style.transform = "translateX(0)";
                welcome_part_section.style.filter = "none";
            }
            // update position in session storage 
            sessionStorage.setItem("positionX", String(scroll_position));
        });
    }
    // update position in session storage
    sessionStorage.setItem("positionX", String(scroll_position));
});
var btns = document.querySelectorAll(".dest");
var loading_div = document.querySelector(".loading-close");
var close_div = document.querySelector(".close");
btns.forEach(function (btn) { return btn.addEventListener("click", function () {
    // cover page with close div
    if (loading_div) {
        loading_div.classList.remove("remove");
        loading_div.classList.add("active");
        loading_div.style.zIndex = "100000";
        if (close_div) {
            // redirect page when animation is done
            close_div.addEventListener("animationend", function () {
                window.location.href = btn.dataset.location;
            });
        }
    }
}); });
