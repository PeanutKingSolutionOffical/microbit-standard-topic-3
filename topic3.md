# Topic 3

## Checkpoint - touch sensor

Show a tick or a cross according to input from the touch sensor.

```blocks

pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})

```

## Checkpoint - serial print

Print the readings of the greyscale sensor on a computer screen.

Connect both grayscale sensor to pin P1 and P2.
Set analog read pin P1 as value x.
Set analog read pin P2 as value y.  

```blocks

basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P1))
    serial.writeValue("y", pins.analogReadPin(AnalogPin.P2))
})

```

## Assessment - touch sensor counter

Counts the number of times the touch sensor is pressed and displays the count on the LED display.

```blocks

pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
let touch = 0
basic.forever(function () {
    basic.showNumber(touch)
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        touch += 1
    }
})

```

## Assessment - light-activated alarm

Sounds a buzzer or displays a warning message on the LED display when the ambient light level drops below a certain threshold (indicating darkness).

```blocks

basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P1) > 200) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    }
})

```