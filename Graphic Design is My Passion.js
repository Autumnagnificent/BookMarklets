javascript: (() => {

    gd();

    window.addEventListener("scroll", function (event) {
        gd();
    });

    function gd() {
        const allElements = document.querySelectorAll('*');

        for (let element of allElements) {

            element.style.fontFamily = 'Comic Sans MS';
            element.style.fontSize = '' + (Math.random() + 1.1) + 'vw';

            var h = Math.random() * 360;
            element.style.color = 'hsl(' + h + ' , 100%, 50%)';
            h = Math.random() * 360;
            element.style.background = 'hsl(' + h + ' , 100%, 50%)';

            var max = .45;
            var r = (Math.random() * max * 2) - max;
            element.style.transform = 'rotate(' + r + 'deg)';

            if (Math.random() < .1) {
                h = Math.random() * 360;
                element.style.textShadow = '1px 4px hsl(' + h + ' , 100%, 50%)';   
            }
            else {
                element.style.textShadow = '';
            }
        }
    }
})();