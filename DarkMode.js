javascript: (() => {

    start(500);
    function start(delay) {
        var id = window.setInterval(Exec, delay);
    }

    function Exec() {
        
        const allElements = document.getElementsByTagName("*");

        for (let element of allElements) {
            if (element.textContent != "") {
                element.style.color = 'hsl(0, 0%, 85%)';
                element.style.background = 'hsl(0, 0%, 5%)';

                element.style.borderColor = 'hsl(0, 0%, 8%)';
                element.style.borderRadius = '8px';
                element.style.borderWidth = '1px';
                element.style.borderStyle = 'solid';

                element.style.userSelect = 'text';
            }
            else {
                element.style.color = 'hsl(0, 0%, 85%)';
                element.style.background = 'hsl(0, 0%, 3.5%)';
            }
        }
    }
})();