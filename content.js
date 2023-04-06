const twitterIcon = document.querySelector('image');

if (twitterIcon) {
	console.log('Twitter Icon Normalizer: Twitter Icon found');
	// print the current twitter icon
	console.log(twitterIcon);
	// change xlink:href to the new twitter icon
	twitterIcon.setAttribute(
		'xlink:href',
		'https://raw.githubusercontent.com/bradtraversy/twitter-icon-normalizer/master/twitter-icon.png'
	);
} else {
	console.log('Twitter Icon Normalizer: Twitter Icon not found 31');
}
