const mainPage                  = document.querySelector(".main-page"),
        contentNumber           = document.querySelectorAll(".main-content").length,
        mainPageContent         = document.querySelectorAll(".main-page-content"),
        mainPageContentNumber   = mainPageContent.length - 1,
        posScroll               = parseInt(sessionStorage.getItem("positionX"))


// scroll page based on the last saved position gallery
var scrollPos = posScroll ? posScroll : 0
mainPage.style.transform = "translateX(-" +  scrollPos + "vw)"


filter_current_gallery()

function update_scroll_position(destination){
    // update scroll position based on scroll
    if (destination > 0){
        scrollPos = (scrollPos < (contentNumber - 1) * 100 + 80) ? scrollPos + 10 : (contentNumber - 1) * 100 + 80
    }
    else{
        scrollPos = (scrollPos == 0) ? 0 : scrollPos - 10
    }
    
    mainPage.style.transform = "translateX(-" +  scrollPos + "vw)"
}
function filter_current_gallery(){

    // update gallery based on scroll position
    mainPageContent.forEach(mpc => mpc.classList.remove("active"))

    
    // get which part is active
    if (scrollPos - 40 >= 0){

        var whichPart = Math.floor((scrollPos - 40) / 100),
            remainder = (scrollPos - 40) % 100

        // const threshold = 100
        // console.log(scrollPos, whichPart, remainder)
        // if (remainder <= threshold){
            mainPageContent[whichPart].classList.add("active")
        // }
        // else{
        //     mainPageContent[whichPart + 1].classList.add("active")
        // }
    }
    if (scrollPos - 80 >= -40){
        document.querySelector(".welcome-part").style.filter = "brightness(10%)"
    }
    else{
        document.querySelector(".welcome-part").style.filter = "none"
    }

    if (scrollPos - 80 >= -40){
        document.querySelector(".scroll-command").style.opacity = "0"
    }
    else{
        document.querySelector(".scroll-command").style.opacity = "1"
    }
}
window.addEventListener("load", e=>{
    mainPage.addEventListener('wheel', function(e) {
        var destination = e.deltaY
        // update scroll position
        update_scroll_position(destination)
        
        // filter container that can be clicked
        filter_current_gallery()
        
        // update position in session storage
        sessionStorage.setItem("positionX", scrollPos)
        
    })
    
    document.querySelector(".welcome-part").addEventListener('wheel', function(e) {
        var destination = e.deltaY
        // update scroll position
        update_scroll_position(destination)
        
        // filter container that can be clicked
        filter_current_gallery()
        
        // update position in session storage
        sessionStorage.setItem("positionX", scrollPos)
        
    })

    // update position in session storage
    sessionStorage.setItem("positionX", scrollPos)
})














const   btns = document.querySelectorAll("button.dest"),
        loading_div = document.querySelector(".loading-close"),
        close_div = document.querySelectorAll(".close")


btns.forEach(
    btn=>btn.addEventListener("click", e=>{
        // cover page with close div
        loading_div.classList.remove("remove")
        loading_div.classList.add("active")
        loading_div.style.zIndex = "100000"

        // redirect page when animation is done
        close_div[0].addEventListener("animationend", e=>{
            window.location.href= btn.dataset.location
        })
    })
)
