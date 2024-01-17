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

```blocks

basic.forever(function () {
    serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
})


```