radio.onReceivedNumber(function (receivedNumber) {
    finch.setBeak(0, 0, 0)
    if (receivedNumber == 0) {
        finch.startMotors(25, 25)
    } else if (receivedNumber == 1) {
        finch.startMotors(-10, 10)
    } else if (receivedNumber == 2) {
        finch.startMotors(10, -10)
    } else if (receivedNumber == 3) {
        finch.startMotors(-25, -25)
    } else if (receivedNumber == 4) {
        finch.startMotors(0, 0)
    }
})
finch.startFinch()
let receivedNumber = 1
radio.setGroup(receivedNumber)
basic.showNumber(receivedNumber)
