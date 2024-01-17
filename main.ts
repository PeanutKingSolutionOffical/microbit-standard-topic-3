basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P1) > 200) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    }
})
