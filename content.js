// check if page is loaded
window.addEventListener(
	'load',
	function () {
		setTimeout(() => {
			var twitterIcon = document.querySelector('#\\30 -a > image');
			if (twitterIcon) {
				// set xlink:href attribute
				twitterIcon.setAttribute(
					'xlink:href',
					'https://github.com/yusufarsln98/Twitter-Icon-Normalizer/blob/master/icon-128.png?raw=true'
				);
			} else {
				console.error('twitter icon not found');
			}
		}, 2000);
	},
	false
);

// 'https://github.com/yusufarsln98/Twitter-Icon-Normalizer/blob/master/icon-128.png?raw=true'
