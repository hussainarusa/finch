finch.startFinch()
let num = 1
radio.setGroup(num)
basic.showNumber(num)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(0)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else if (input.rotation(Rotation.Pitch) > 100) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(4)
    }
})
