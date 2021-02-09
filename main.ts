namespace SpriteKind {
    export const Pota = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Pota, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    ball.destroy()
    topunvarolmadurumu = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e . . . . . . 
        . . e e e e e e e e e . . . . . 
        . f e e e e e e e e e f . . . . 
        e e f e e e e e e e f e e . . . 
        e e e f f f f f f f e e e . . . 
        e e e e e e e e e e e e e . . . 
        e e e e e e e e e e e e e . . . 
        e e e e e e e e e e e e e . . . 
        e e e f f f f f f f e e e . . . 
        e e f e e e e e e e f e e . . . 
        . f e e e e e e e e e f . . . . 
        . . e e e e e e e e e . . . . . 
        . . . e e e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Arfbot, 0, -100)
    topunvarolmadurumu = true
})
let ball: Sprite = null
let topunvarolmadurumu = false
let Arfbot: Sprite = null
scene.setBackgroundImage(img`
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444
    4444444444444444444441111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111114444444444444444444444
    4444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444
    4444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444
    4444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444
    4444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444
    4444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444
    4444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444
    4444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444
    4444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444
    4444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444
    4444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444
    4444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444
    4444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444
    4444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444
    4444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444
    4444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444
    4444444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444444
    4444444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444444
    4444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444
    4444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444
    4444444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444444
    4444444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444444
    4444444444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444444444
    4444444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444
    4444444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444
    4444444444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444444444
    4444444444444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444444444444
    4444444444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444444
    4444444444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444444
    4444444444444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444444444444
    4444444444444444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444444444444444
    4444444444444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444444444
    4444444444444444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444444444444444
    4444444444444444444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444414444444444444444444444444444444444444444
    4444444444444444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444444444444
    4444444444444444444444444444444444444444411444444444444444444444444444444444444444444444444444444444444444444444444411444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444144444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444441144444444444444444444444444444444444444444444444444444444444444444114444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444414444444444444444444444444444444444444444444444444444444444444441444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444441144444444444444444444444444444444444444444444444444444444444114444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444411444444444444444444444444444444444444444444444444444444411444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444114444444444444444444444444444444444444444444444444441144444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444441144444444444444444444444444444444444444444444444114444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444411444444444444444444444444444444444444444444411444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444111444444444444444444444444444444444444411144444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444111444444444444444444444444444444411144444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444111114444444444444444444441111144444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444441111111111111111111114444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `)
Arfbot = sprites.create(img`
    . . . . . . d d d d . . . . . . 
    . . . 9 9 d d d d d d 9 9 . . . 
    . . . 9 d d 8 8 8 8 d d 9 . . . 
    . . . d d 8 8 8 8 8 8 d d . . . 
    . . . d d d 8 8 8 8 d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . c d d d d d d c . . . . 
    . . . . c . c c c c . c . . . . 
    . . . . c c c c c c c c . . . . 
    . . . . c c c c c c c c . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c . . c c . . . . . 
    . . . . . c . . . . c . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Arfbot.setPosition(75, 104)
Arfbot.setVelocity(50, 0)
Arfbot.setFlag(SpriteFlag.BounceOnWall, true)
let Pota = sprites.create(img`
    . . f . . . . . . . . . f . . . 
    . f . . . . . . . . . . . f . . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f f . . . . . . . . . . . f f . 
    f f . . . . . . . . . . . f f . 
    f . f f . . . . . . . f f . f . 
    f . f . f f f f f f f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . . . f . . . f . f . 
    f . f . f . . . f . . . f . f . 
    f . f . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Pota)
Pota.setPosition(77, 8)
info.setScore(0)
Pota.setVelocity(50, 0)
Pota.setFlag(SpriteFlag.BounceOnWall, true)
info.setLife(3)
topunvarolmadurumu = false
game.onUpdateInterval(500, function () {
    if (topunvarolmadurumu == true && ball.y < 1) {
        info.changeLifeBy(-1)
        topunvarolmadurumu = false
    }
})
