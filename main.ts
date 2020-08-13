radio.onReceivedStringDeprecated(function (receivedString) {
    a = morse.indexOf(receivedString)
    alphabet[a].showImage(0)
    radio.sendString("received")
})
let a = 0
let alphabet: Image[] = []
let morse: string[] = []
radio.setGroup(1)
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
alphabet = [images.createImage(`
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `), images.createImage(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `), images.createImage(`
    . . # # .
    . # . . .
    . # . . .
    . # . . .
    . . # # .
    `), images.createImage(`
    . # # . .
    . # . # .
    . # . # .
    . # . # .
    . # # . .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # . . .
    `), images.createImage(`
    . # # # .
    # . . . .
    # . # # .
    # . . # .
    . # # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `), images.createImage(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `), images.createImage(`
    . # # # .
    . . . # .
    . . . # .
    . # . # .
    . . # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # # . .
    . # . # .
    . # . # .
    `), images.createImage(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `), images.createImage(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `), images.createImage(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `), images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # # # .
    . . . . .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . . .
    . # . . .
    `), images.createImage(`
    # # # # .
    # . . # .
    # . # # .
    # # # # .
    . . . . #
    `), images.createImage(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # . # .
    `), images.createImage(`
    . . # # .
    . # . . .
    . . # . .
    . . . # .
    . # # . .
    `), images.createImage(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `), images.createImage(`
    # . . . #
    # . . . #
    . # . # .
    . # . # .
    . . # . .
    `), images.createBigImage(`
    # . . . # . . . # .
    # . . . # . . . # .
    . # . # . # . # . .
    . # . # . # . # . .
    . . # . . . # . . .
    `), images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `), images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `), images.createImage(`
    # # # # #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `), images.createImage(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `), images.createImage(`
    . . # . .
    . # . # .
    . . # . .
    . # . . .
    . # # # .
    `), images.createImage(`
    . # # . .
    . . . # .
    . . # # .
    . . . # .
    . # # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # . .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . # . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . . . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)]
