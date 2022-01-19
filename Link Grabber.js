javascript: (() => {

    Exec();

    function Exec() {

        let s = "";
        let i = 0;

        var getUrl = window.location;

        for (let link of document.links) {
            s += link;
            s += "\n";   
            i++;
        }

        navigator.clipboard.writeText(s);

        alert("Copied [" + i + "] Links to your Clipboard");

    }
})();