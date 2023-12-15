let Mesure_Distance = 0
radio.setGroup(1)
basic.forever(function () {
    Mesure_Distance = grove.measureInCentimeters(DigitalPin.P0)
    if (Mesure_Distance <= 2) {
        radio.sendString("Prioritaire")
    }
})
