! function () {
    var e;
    document.body.onload = function () {
        setTimeout(function () {
            var e = document.querySelector(".preloader");
            e.classList.contains("done") || e.classList.add("done")
        }, 1e3)
    }, document.querySelector(".navbar-nav").querySelectorAll('a[href^="#"]').forEach(e => {
        e.addEventListener("click", function (e) {
            e.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            })
        })
    }), document.querySelector(".hero__toscroll").addEventListener("click", function (e) {
        e.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    }), e = document.querySelector("#btn-up"), window.onscroll = function () {
        document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? e.style.opacity = "1" : e.style.opacity = "0"
    }, e.addEventListener("click", function (e) {
        e.preventDefault(), document.querySelector(".hero").scrollIntoView({
            behavior: "smooth"
        })
    }), (new TimelineMax).from(".navbar-brand", .5, {
        x: "-300%"
    }, delay = .5).staggerFrom(".nav-link", .5, {
        y: "-50",
        opacity: 0
    }, .1, "-=0.20").from("#title", 2, {
        y: "-300%",
        ease: Bounce.easeOut
    }).from(".hero__subtitle", .5, {
        y: "100",
        opacity: 0
    }, "-=1").from(".hero__toscroll", 1, {
        backgroundColor: "rgba(52, 58, 64)",
        opacity: .8,
        borderRadius: "5px"
    }, "-=2"), AOS.init()
}();