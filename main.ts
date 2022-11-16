function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
}
function green () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(5000)
}
function fin () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function brun () {
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        fin()
    }
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    _1 += 1
    while (_2 >= 5) {
        if (_1 == 1) {
            basic.showNumber(_2)
            _2 += -1
            basic.pause(100)
        } else {
        	
        }
    }
    basic.clearScreen()
}
function rouge () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(3500)
}
let _2 = 0
let _1 = 0
_1 = 0
_2 += 10
basic.forever(function () {
    for (let index = 0; index < 41000; index++) {
        if (input.buttonIsPressed(Button.A)) {
        	
        } else {
            green()
            jaune()
            rouge()
        }
    }
})
