javascript: (() => {

    start(500);
    function start(delay) {
        var id = window.setInterval(Exec, delay);
    }

    function Exec() {
        
        const allElements = document.getElementsByTagName("*");

        for (let element of allElements) {

            element.style.userSelect = 'text';

            if (element.textContent != "") {
                element.style.color = 'hsl(0, 0%, 85%)';
                element.style.background = 'hsl(0, 0%, 5%)';

                element.style.boxShadow = '0px 0px 128px -148px white';

            }
            else {
                element.style.color = 'hsl(0, 0%, 85.5%)';
                element.style.background = 'hsl(0, 0%, 3.5%)';
            }
        }
    }
})();