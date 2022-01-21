javascript: (() => {

    Exec();

    async function Exec() {

        let s = "";
        let i = 0;

        var getUrl = window.location;
        var domain = getUrl.host.split(".")[getUrl.host.split.length - 1];

        for (let link of document.links) {
            if (link.href.search(domain) == -1) {
                s += link.href;
                s += "\n";
                i++;   
            }
        }

        let OutputArray = [];
        for (let l of s.split('\n')) {
            if (!OutputArray.includes(l)) OutputArray.push(l);
        }
        let Out = OutputArray.join("\n\n");

        await navigator.clipboard.writeText(Out);

        alert("Copied [" + i + "] Links to your Clipboard\n\nThis does not include Links from the Domain : [" + domain + "]\n\n\n" + Out);

    }
})();