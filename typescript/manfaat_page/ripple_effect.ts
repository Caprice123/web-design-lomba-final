document.addEventListener("click", (e) => {
    let ripple:HTMLElement = document.createElement("div");
    ripple.className = "ripple";
    document.body.appendChild(ripple);
    
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    ripple.style.animation = "ripple-effect 0.4s linear";
    ripple.addEventListener("animationend", () => document.body.removeChild(ripple));
})