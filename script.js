
//error threshold must be less than 100
function sqrt(x, errorThreshold){ //e.g. x = 50
	var guesses = []
	var guess = x/ 2//e.g. guess = 25
	var difference = 100 //init difference to some arbitrarily high number

	while (difference > errorThreshold){
		guesses.push(guess)

		quotient = x / guess //e.g. 50 / 25 = 2
		guess = (guess + quotient) / 2 /*e.g. (25 + 2) / 2 = 13.5 . . doing this line and the above line of code over and over again will get guess and x/guess closer to squareroot. either guess will be too high and x/guess too low or vice versa. If we take the average of guess and x/guess we get even closer to the square root. */
		difference = Math.abs(guesses[guesses.length - 1] - guess)

		console.log(guesses)
	}
	guesses.push(guess)
	console.log(guesses)
	return guess
}

sqrt(50, .001)
console.log(Math.sqrt(50))
sqrt(75, .001)
console.log(Math.sqrt(75))
sqrt(22, .001)
console.log(Math.sqrt(22))
sqrt(22000, .001)
console.log(Math.sqrt(22000))
sqrt(22000000, .001)
console.log(Math.sqrt(22000000))
