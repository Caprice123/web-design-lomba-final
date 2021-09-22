const pos: HTMLElement = document.querySelector(".positif")
const neg: HTMLElement = document.querySelector(".negatif")

pos.addEventListener("mouseover", e=> {
    pos.classList.add("active")
    neg.classList.add("pos-active")
})
pos.addEventListener("mouseout", e=> {
    pos.classList.remove("active")
    neg.classList.remove("pos-active")
})

neg.addEventListener("mouseover", e=> {
    neg.classList.add("active")
    pos.classList.add("neg-active")
})
neg.addEventListener("mouseout", e=> {
    neg.classList.remove("active")
    pos.classList.remove("neg-active")
})