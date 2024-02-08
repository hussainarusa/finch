let count = 0
finch.startFinch()
basic.forever(function () {
    count = 0
    for (let index = 0; index < 100; index++) {
        finch.setTail(TailPort.All, count, 100 - count, 0)
        count += 1
        basic.pause(100)
    }
    count = 0
    for (let index = 0; index < 100; index++) {
        finch.setTail(TailPort.All, 100 - count, 0, count)
        count += 1
        basic.pause(100)
    }
    count = 0
    for (let index = 0; index < 100; index++) {
        finch.setTail(TailPort.All, 0, count, 100 - count)
        count += 1
        basic.pause(100)
    }
})
