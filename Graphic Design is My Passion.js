javascript: (() => {

	var GDCURSOR;
	var DoIt = true;

	start(25);
	async function start(delay)
	{
		document.addEventListener('mousemove', MoveCursor, event);

		GDCURSOR = document.createElement('img');
		GDCURSOR.style.width = '48px';
		GDCURSOR.style.height = '48px';
		GDCURSOR.style.position = 'fixed';
		GDCURSOR.style.zIndex = '9999999999999999999';
		GDCURSOR.src = 'https://www.clipartmax.com/png/small/132-1322583_overlay-pixel-glitch-tumblr-80s-90s-8bit-computer-aesth-windows-95.png';
		document.body.appendChild(GDCURSOR);

		var id = window.setInterval(gd, delay);
	}

	function MoveCursor(event)
	{
		var x = event.clientX;
		var y = event.clientY;
		console.log("MOUSE MOVED");
		
		GDCURSOR.style.marginLeft = x - 24 + 'px';
		GDCURSOR.style.marginTop = y - 24 + 'px';
	}

	async function gd() {

		if (!DoIt) return;
		DoIt = false;

		const allElements = document.querySelectorAll('*'); 

		for (let element of allElements) {
			element.style.fontFamily = 'Comic Sans MS';
			element.style.fontStyle = Math.random() > .75 ? 'bold' : 'normal';
			element.style.fontSize = '' + (Math.random() + 1.25) + 'vw';

			var h = Math.random() * 360;
			element.style.color = 'hsl(' + h + ' , 100%, 50%)';
			h = Math.random() * 360;
			element.style.background = 'hsl(' + h + ' , 100%, 50%)';

			var max = .35;
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
		await mdelay(1);

		DoIt = true;
	}

	function mdelay(n) {
		return new Promise(function (resolve) {
			setTimeout(resolve, n * 1000);
		});
	}
})();