let time = 0
let start = 0
input.onLogoEvent(TouchButtonEvent.Released, function () {
    time = start - input.runningTime()
    basic.showNumber(Math.idiv(time, 1000))
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(time % 1000)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    start = input.runningTime()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
