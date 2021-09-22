var pos = document.querySelector(".positif");
var neg = document.querySelector(".negatif");
pos.addEventListener("mouseover", function (e) {
    pos.classList.add("active");
    neg.classList.add("pos-active");
});
pos.addEventListener("mouseout", function (e) {
    pos.classList.remove("active");
    neg.classList.remove("pos-active");
});
neg.addEventListener("mouseover", function (e) {
    neg.classList.add("active");
    pos.classList.add("neg-active");
});
neg.addEventListener("mouseout", function (e) {
    neg.classList.remove("active");
    pos.classList.remove("neg-active");
});
