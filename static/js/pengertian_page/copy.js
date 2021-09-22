// const is_passed = (element: HTMLElement): boolean => {
//     let rect            : DOMRect   = element.getBoundingClientRect();
//     let top_distance    : number    = rect.top;
//     let bottom_distance : number    = rect.bottom;
//     let is_visible      : boolean
//     is_visible = (element.classList.contains("active")) ? (bottom_distance <= window.innerHeight) : (bottom_distance + rect.width <= window.innerHeight);
//     return is_visible;
// }
// const update_journey = (): void => {
//     type QueryAllType = NodeListOf<HTMLElement>;
//     let circle_journey  : QueryAllType = document.querySelectorAll(".circle");
//     let circles         : QueryAllType = document.querySelectorAll(".little-circle");
//     let lines           : QueryAllType = document.querySelectorAll(".lines");
//     for (let index = 0; index < circle_journey.length; index++) {
//         if(is_passed(circle_journey[index])){
//             circle_journey[index].classList.add("active")
//             circles[index].classList.add("active")
//             lines[index].classList.add("active")
//         }
//         else{
//             circle_journey[index].classList.remove("active")
//             circles[index].classList.remove("active")
//             lines[index].classList.remove("active")
//         }
//     }
// }
window.addEventListener("load", function () {
    var loading_section = document.querySelector("section.loading");
    console.log(parseInt((sessionStorage.getItem("first_time"))));
    if (isNaN(parseInt((sessionStorage.getItem("first_time"))))) {
        loading_section.style.zIndex = "-1";
        loading_section.classList.add("remove");
    }
    // else{
    //     loading_section.classList.remove("remove");
    // }
    var close_div = document.querySelector(".close");
    close_div.addEventListener("animationend", function () {
        if (loading_section.classList.contains("active")) {
            loading_section.style.zIndex = "10000";
            window.location.href = "index.html";
        }
        else {
            loading_section.style.zIndex = "-1";
        }
    });
    var back = document.querySelector(".home");
    back.addEventListener("click", function () {
        loading_section.style.zIndex = "10000";
        loading_section.classList.add("active");
    });
    // window.addEventListener("scroll", update_journey)
    // update_journey()
});
