javascript: (() => {

    start(500);
    function start(delay) {
        var id = window.setInterval(Exec, delay);
    }

    function Exec() {
        
        const allElements = document.querySelectorAll('*');

        for (let element of allElements) {
            element.style.color = 'hsl(0, 0%, 85%)';
            element.style.background = 'hsl(0, 0%, 5%)';

            element.style.userSelect = 'text';
        }
    }
})();