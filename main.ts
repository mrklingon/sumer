function showStats () {
    svMode = Mode
    Mode = 0
    basic.showString("P")
    basic.showNumber(Population)
    basic.showString("G")
    basic.showNumber(Grain)
    basic.showString("F")
    basic.showNumber(EAT)
    basic.showString("S")
    basic.showNumber(Planting)
    Mode = svMode
}
function doYear () {
    Grain = Grain - Planting
    Crop = randint(20, 50) / 10 * Planting
    basic.showString("C")
    basic.showNumber(Crop)
    Death = Math.trunc(15 / EAT * randint(5, 20))
    basic.showString("D")
    basic.showNumber(Death)
    Immigrants = Math.trunc(EAT / 15 * randint(5, 10))
    basic.showString("I")
    basic.showNumber(Immigrants)
    Population = Immigrants + (Population - Death)
    Grain = Grain + Crop
}
input.onButtonPressed(Button.A, function () {
    if (Food == Mode) {
        EAT += -1
        if (EAT < 0) {
            EAT = 0
        }
    }
    if (Plant == Mode) {
        Planting += -10
        if (Planting < 0) {
            Planting = 0
        }
    }
    if (0 == Mode) {
        doYear()
    }
})
input.onButtonPressed(Button.AB, function () {
    svMode = Mode
    Mode = 0
    svMode += 1
    if (2 < svMode) {
        svMode = 0
    }
    modes[svMode].showImage(0)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Mode = svMode
})
input.onButtonPressed(Button.B, function () {
    if (Food == Mode) {
        EAT += 1
        if (EAT > 30) {
            EAT = 30
        }
    }
    if (Plant == Mode) {
        Planting += 10
        if (Planting > ACRES) {
            Planting = ACRES
        }
    }
    if (0 == Mode) {
        basic.showString("C")
        basic.showNumber(Crop)
        basic.showString("D")
        basic.showNumber(Death)
        basic.showString("I")
        basic.showNumber(Immigrants)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    showStats()
})
let Immigrants = 0
let Death = 0
let Crop = 0
let svMode = 0
let modes: Image[] = []
let Population = 0
let Grain = 0
let Plant = 0
let Food = 0
let Planting = 0
let ACRES = 0
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
ACRES = 1000
Planting = 500
Food = 1
Plant = 2
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
    if (Food == Mode) {
        led.plotBarGraph(
        EAT,
        30
        )
    }
    if (Plant == Mode) {
        led.plotBarGraph(
        Planting,
        ACRES
        )
    }
    if (Grain < EAT * Population) {
        EAT = 0
    }
    if (Grain < Planting + EAT * Population) {
        Planting = Planting - 100
        if (Planting < 0) {
            Planting = 0
        }
    }
})
