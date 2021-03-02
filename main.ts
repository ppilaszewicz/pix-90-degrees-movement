input.onButtonPressed(Button.A, function () {
    pix.move(4)
    pix.turn(Direction.Right, 90)
    basic.pause(100)
    pix.move(4)
    pix.turn(Direction.Right, 90)
    basic.pause(100)
    pix.move(4)
    pix.turn(Direction.Right, 90)
    basic.pause(100)
    pix.move(4)
    pix.turn(Direction.Right, 90)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    let number = 0
    if (guess == number) {
        basic.showString("Good Guess")
    } else if (guess > number) {
        basic.showString("Lower")
    } else {
        basic.showString("Higher")
    }
})
input.onButtonPressed(Button.B, function () {
    guess = guess - 1
    basic.showNumber(guess)
})
let guess = 0
let pix: game.LedSprite = null
pix = game.createSprite(0, 0)
basic.forever(function () {
	
})
