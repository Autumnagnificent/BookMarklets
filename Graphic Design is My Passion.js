javascript: (() => {

	start(1000);
	async function start(delay)
	{
		var id = window.setInterval(gd, delay);
	}

	async function gd() {
		const allElements = document.querySelectorAll('*');
		var images = document.images; 

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
	}

	function mdelay(n) {
		return new Promise(function (resolve) {
			setTimeout(resolve, n * 1000);
		});
	}
})();