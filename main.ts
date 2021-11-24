function showStats () {
    basic.showString("P")
    basic.showNumber(Population)
    basic.showString("G")
    basic.showNumber(Grain)
}
function shoPlanting () {
	
}
function doYear () {
	
}
input.onButtonPressed(Button.A, function () {
    if (Food == Mode) {
        EAT += -1
        if (EAT < 0) {
            EAT = 0
        }
    }
})
function shoFood () {
	
}
input.onButtonPressed(Button.AB, function () {
    Mode += 1
    if (2 < Mode) {
        Mode = 0
    }
    modes[Mode].showImage(0)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (Food == Mode) {
        EAT += 1
        if (EAT > 30) {
            EAT = 30
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    showStats()
})
let modes: Image[] = []
let Population = 0
let Grain = 0
let Food = 0
let EAT = 0
let Mode = 0
basic.showString("Sumer")
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . # . . . . # # #
    . # # # . . . # . #
    # # # # # . . # . #
    `).scrollImage(1, 200)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
Mode = 0
EAT = 20
let ACRES = 1000
Food = 1
let Plant = 2
Grain = randint(2500, 3000)
Population = 100
modes = [images.createImage(`
    . . # . .
    . # # . .
    . . # # .
    . # # . .
    # . . # .
    `), images.createImage(`
    # . # . #
    # . # . #
    # # # # #
    . . # . .
    . . # . .
    `), images.createImage(`
    . . # . .
    . . # . .
    . # # # .
    . # # # .
    . . # . .
    `)]
basic.forever(function () {
	
})
basic.forever(function () {
    if (Food == Mode) {
        led.plotBarGraph(
        EAT,
        30
        )
    }
})
