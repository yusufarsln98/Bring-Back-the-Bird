// check if page is loaded

window.addEventListener(
	'load',
	function () {
		// check if component is loaded
		const IMAGE_BASE64 =
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACnVBMVEUAAAAA//8Af/8Aqv8Av/8zmf8qqv8kkf4fn/8cqf4XoucVqukTnOsko+wime4fn+8epfAcm/AaofEZpfIYnfIiovMhpvMfn/Qeo/QdnPUcoPUbo/UanvYZoe4gpO4fn+8eou8enfAdoPAcovAbnvEaofEao/Efn/Ieo/IdoPMcovMcnvMboPMbovQan/QfofQeo+8dofAcnvAcoPAbovEbn/EaofEeovEen/IdofIdo/IcoPIcofIbn/MboPMeovMen/MeofMdovAdoPAcofAcn/AboPEbofEen/EeofEdovEdoPEcovIcoPIbofIeoPIdofMcoPAcofAcn/AboPEeofEdoPEcoPEcofEcovIcoPIbofIdoPIdofIdoPIcofIcovMcoPAen/EdoPEdofEdoPEdofEcofEcoPEcofEcovIdoPIdofIdoPIdoPIdofIcoPIcofIcoPIdoPEdofEboPEcofEcofEcoPEcofEdoPAdoPIdofIdoPIbn/IcofIdoPIdofIdoPEdn/EbofEcoPEcofEdofAdoPAdoPIdofIboPIcofIcoPIdofIdoPIdoPEbn/EcofEcofEdofEdoPAdofAdoPAbn/AbofIcoPIcn/IdoPIdofIdofIdn/IbofIboPIcn/EcofEcoPEdofEdofEdn/AdofAboPAbn/AcofAcoPIdn/Idn/IdofIdofIbofIcoPIcn/EdofEdoPEdofEdn/AbofAbn/AcofAdoPIdofIdn/IbofIbofIbofIdn/IdofEdn/EdofAbofAbn/AbofAboPAcn/AdofAdn/Adn/Ibn/IbofIbofIbn/IdofIdn/Idn/IdofIdn/AbofAbofAbn/AbofAdn/Adn/AdofAdn/AdofLEnFuDAAAA3nRSTlMAAQIDBAUGBwgJCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKissLS4vMDEyNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OUFFSVFdZWltcXV5hYmNkZWdoaWprbG5vcHFyc3R1dnd4eXp7fH5/goOEhYaHiImKi4yNkJKTlJWWl5mbnJ2en6Gio6WnqKmrrK2ur7CxsrO1tre4ubq7vL2+v8DBwsPExcbIycrMzc7P0NHT1NbX2Nrb3N3f4eLj5OXm5+jp6uvs7u/w8fLz9PX29/j5+vv8/f7sCofpAAAEpklEQVQYGe3B+3+NdQAH8M+Z7bCZzbA1Rk1izTEjhahQqVZkE6WpUWkuYUbCkNvckuWyytySoiFLWG7bYpmx7LSNaZdzPn9LbDbb2fOc83y/z+WHXuf9hp+fn5+fn5/xOsdP/nBe5qJZk4fYYb1RKwoa2KK+YPkIWCkio4SeiueHQ1F0PAwWllVDJVXLQtFBt2VVfWCsaTep5sYUtBeRWcn98DAzHDp020tvvgnFI47Nd0mORXu9a48FQdrAEnp36Uk0i5xdwAeOwcNqcgdkDa+gL7cSAduQefkuNnENQ3vBTpIrIGdoFX2rzPy+gq3WwcNUPrAYMmLLKepyMDx8xyafQFzn8xRVMxgeAmvYbD6EZVNUQxI8jWCLZRA0lqJc09EsIAEt0thqQyeICLxIQXXJaNI3o2Q8WqznIwe6QsAMCrr5PO7rP+ekm6vQah/bOB8DzToVUcwP0bYB07YU8778QLQ6zbYqxkOrNynmyvZTVWz2VxQeKWQ7rgwbtMmlrJpEtFFIDz/2gRah/1JSw0S0VUBPlSnQIImSXClo5yA7yu0Nn76knMZ30d4WKqj+OAA+5FNKfTI8pFPRufHw7iZl1LwKTy9RxaHB8KIrZZQORQch9VTh2uOAqhhKyI+EgmNU5c4bCRVxFLc2EEpm05uzM4KhJIHinoKinnX0qnLzaHQ0iOLioWwnffnzi+cC0F4vinNAWbyLvt36Kjkabd2jMAdU5FCbku2zRoXgoT8obBBU9KmhZq6iQ5vmvj0mrmcOhcVCTRotEQU1tjxawQ5V4ZdpvjvwIraMprsGJSGfheCBuDKa7VcosfP2yv6474lLNNkuKKon+duS0V3Q7VuaKwuKStmk4cqhHWU01ftQdJxWGQVFG2iVcCh6hxa5BmUxtMheqDhDayyAirm0xhio6HGPVqi1Q81WWuEoVPWrowUWQd1aWsABdSFXabqr8ObFRpptPbxaQrONhle2HJrrmg3eBR2gqbLgS9BummkQfAr43E3T/AItkspplqnQJGK7i6a4YYdGQ/a5aIJF0G7AmlIaraY7RNhGLHfSUGuhhW1X9uK091I/XbXnYiMNdacXNNlIk2RBGwfN4ewBjQ7TFOnQaribJii2Q7McmiAJ2vWsoOFyIeItNw1W1RtCVtJgqRBj201D7Yco+z4a6O8oCAvcScO4J0LGgkYaZDnkjCymIX7uBEnBS2upX3EE5D22ppo6/RMHXUJmHKmjDnUToFvoK0v3/F5aTRmuKTBI5FHKSIVBXi+nBHcajBG+lTLcqTBGSjll1E+HIZ49SSnVL8MIw/Io53oC9LO9doSSTkZBt94LiygrOwg6PT77eCNlOZOhS/+U7MvU4UQ/iHlhXEJsZPeI6NjEcdMXbjvhpC535gRAUOi6Rhrm8OOQ4PiJxiiZDElvFFI/51w7pNmSL1AfZ2YYdLFNOkV5ZRlh0O+Zr2sp5XRKEIwR/tEZiipbPRhGGrjkHLUr3TQhAIbrNzP3Nn27ezQjEWaxxX+wrbCeahou5KSPDILZgp6esmDzwbPXa/mQ21l0Om9j+iRHZ1grsHtUTN/IsC4B8PPz8/P7H/oPSszFstC3ZDgAAAAASUVORK5CYII=';

		const interval = setInterval(() => {
			var twitterIcon = document.querySelector('#\\30 -a > image');
			if (twitterIcon) {
				// set xlink:href attribute
				twitterIcon.setAttribute(
					'xlink:href',
					IMAGE_BASE64
					// base64 encoded icon
				);
				console.log('Twitter Icon Normalizer: Icon changed!');
				// stop interval
				clearInterval(interval);
			} else {
				console.log('Twitter Icon Normalizer: Original icon not found!');
			}
		}, 0);
	},
	false
);

// 'https://github.com/yusufarsln98/Twitter-Icon-Normalizer/blob/master/icon-128.png?raw=true'
