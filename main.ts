if (kGameHandle.Rocker(kGameHandle.RockerState.Up)) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
} else if (kGameHandle.Rocker(kGameHandle.RockerState.Down)) {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
} else if (kGameHandle.Rocker(kGameHandle.RockerState.Left)) {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
} else if (kGameHandle.Rocker(kGameHandle.RockerState.Right)) {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
} else {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
