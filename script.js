(function () {
    // invocation
    // showTitle();

    //show text in example of portfolio
    function showTitle() {
        let examples = [...document.querySelectorAll(".example")];
        console.log(examples);

        examples.forEach(el => {
            el.addEventListener("mouseover", Tween(el));
        });

        function Tween(el) {

            let title = el.querySelector('.title');
            console.log(el);
            // let tl = new TimelineMax();
            // tl
            //     .from(title, 2, {
            //         x: '-300%',
            //         ease: Bounce.easeOut
            //     }, delay = 1)
            //     .from('#right', 2, {
            //         x: '300%',
            //         ease: Bounce.easeOut
            //     }, "-=2")
            //     .from('.wellcome__btn', .5, {
            //         borderRadius: "30px"
            //     })
            //     .from('.logo__h1', 1, {
            //         y: '-100',
            //         opacity: 0
            //     }, "-=0.5")
            //     .staggerFrom(".nav__list", .5, {
            //         y: '-50',
            //         opacity: 0
            //     }, 0.1, "-=0.25")
        }
    }
})();