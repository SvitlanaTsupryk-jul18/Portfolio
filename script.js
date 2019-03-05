(function () {

    // invocation

    preloader();
    smoothScrollLinks();
    toTop();
    showTitle();
    AOS.init();

    //////preloader

    function preloader() {
        document.body.onload = function () {
            setTimeout(function () {
                var preloader = document.querySelector(".preloader");
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
            }, 1000)
        }
    };

    ////smoothScroll

    function smoothScrollLinks() {
        let nav = document.querySelector(".navbar-nav");
        nav.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        let btnHero = document.querySelector(".hero__toscroll");
        btnHero.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
    }

    /// button to top

    function toTop() {
        var buttonTop = document.querySelector("#btn-up");
        window.onscroll = function () {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                buttonTop.style.opacity = "1";
            } else {
                buttonTop.style.opacity = "0";
            }
        }

        buttonTop.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(".hero").scrollIntoView({
                behavior: 'smooth'
            });
        })
    }


    //show text in example of portfolio
    function showTitle() {

        let tl = new TimelineMax();
        tl
            .from(".navbar-brand", .5, {
                x: '-300%',

            }, delay = .5)
            .staggerFrom(".nav-link", .5, {
                y: '-50',
                opacity: 0
            }, 0.1, "-=0.20")
            .from('#title', 2, {
                y: '-300%',
                ease: Bounce.easeOut
            })
            .from('.hero__subtitle', .5, {
                y: '100',
                opacity: 0
            }, "-=1")
            .from('.hero__toscroll', 1, {
                backgroundColor: "rgba(52, 58, 64)",
                opacity: .8,
                borderRadius: "5px"
            }, "-=2")

    }
})();
