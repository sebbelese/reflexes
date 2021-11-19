let debut = 0
let score = 0
let ancien_score = 0
let bouton = 0
let debut_nombre = 0
input.onButtonPressed(Button.A, function () {
    debut = input.runningTime()
    score = 0
    ancien_score = 0
    while (input.runningTime() - debut < 30 * 1000) {
        bouton = randint(1, 3)
        basic.showNumber(bouton)
        debut_nombre = input.runningTime()
        while (input.runningTime() - debut_nombre < randint(200, 1500)) {
            if (input.pinIsPressed(TouchPin.P0)) {
                if (bouton == 1) {
                    score = score + 1
                } else {
                    score = score - 1
                }
                break;
            }
            if (input.pinIsPressed(TouchPin.P1)) {
                if (bouton == 2) {
                    score = score + 1
                } else {
                    score = score - 1
                }
                break;
            }
            if (input.pinIsPressed(TouchPin.P2)) {
                if (bouton == 3) {
                    score = score + 1
                } else {
                    score = score - 1
                }
                break;
            }
        }
        if (score > ancien_score) {
            basic.showIcon(IconNames.Happy)
            music.playMelody("C D E F G A B C5 ", 2000)
        } else {
            if (score < ancien_score) {
                basic.showIcon(IconNames.Sad)
                music.playMelody("C5 B A G F E D C ", 2000)
            } else {
                basic.showIcon(IconNames.Asleep)
                music.playMelody("F F F F F F F F ", 2000)
            }
        }
        ancien_score = score
        basic.pause(200)
    }
    basic.showIcon(IconNames.Chessboard)
    music.playMelody("C5 G B A F A C5 B ", 500)
    for (let index = 0; index < 4; index++) {
        basic.showNumber(score)
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
