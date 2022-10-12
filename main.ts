radio.setGroup(34)
basic.showLeds(`
    . . # # .
    . # . . .
    . # . . .
    . # . . .
    . . # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(5)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (input.isGesture(Gesture.Shake)) {
        radio.sendNumber(6)
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . . . # .
                . # . . .
                # . . . #
                . . # . .
                # . . # .
                `)
            basic.showLeds(`
                # # . # .
                . . . . .
                . . # . #
                . # . . .
                . . . # .
                `)
            basic.showLeds(`
                . . # . .
                # . . # #
                . . # . .
                # . . . #
                # . . # .
                `)
        }
    }
})
