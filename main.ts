namespace SpriteKind {
    export const wand = SpriteKind.create()
    export const Decke1 = SpriteKind.create()
    export const Fliegehitbox = SpriteKind.create()
    export const SÄ3 = SpriteKind.create()
    export const SÄ4 = SpriteKind.create()
    export const SÄ1 = SpriteKind.create()
    export const SÄ2 = SpriteKind.create()
    export const SÄ5 = SpriteKind.create()
    export const SÄ6 = SpriteKind.create()
    export const Fliege = SpriteKind.create()
    export const King = SpriteKind.create()
    export const Decke2 = SpriteKind.create()
    export const Kanone = SpriteKind.create()
    export const Decke3 = SpriteKind.create()
    export const LEBEN = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (Spieler.vx == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . f f 
            . . . . . . . . . . f f f f f f 
            . . . . . . . . . f f f f f f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f 9 1 f 9 1 f f 
            . . . . . . . f f f f f f f f . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . f f f f . . . 
            `)
        Spieler.vx = -60
        Spieler.vy = 70
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Spieler.vy > 0 && Spieler.vx == 0 && Wand_links == 0 && Spieler.isHittingTile(CollisionDirection.Bottom) == false) {
        Spieler.vy = -170
        Spieler.vx = -50
        Wand_links = 1
    } else if (Spieler.vy > 0 && Spieler.vx == 0 && (Wand_links == 1 && Spieler.isHittingTile(CollisionDirection.Bottom) == false)) {
        Spieler.vy = -170
        Spieler.vx = 50
        Wand_links = 0
    } else if (Spieler.isHittingTile(CollisionDirection.Bottom)) {
        Spieler.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (Spieler.vy > 0 && Spieler.vx == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f 1 9 f 1 9 f . 
            . . . . . . . f f 1 1 f 1 1 f . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f . . . 
            `)
        Spieler.setVelocity(0, 20)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fliegehitbox, function (sprite, otherSprite) {
    statusbar.value += -1
    Startlevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (Spieler.vy > 0 && Spieler.vx == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f 1 9 f 1 9 f . 
            . . . . . . . f f 1 1 f 1 1 f . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f . . . 
            `)
        Spieler.setVelocity(0, 20)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SÄ1, function (sprite, otherSprite) {
    statusbar.value += -1
    Startlevel()
})
sprites.onOverlap(SpriteKind.Fliege, SpriteKind.Decke1, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.King, function (sprite, otherSprite) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    if (Spieler.vx == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f 1 9 f 1 9 f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . . . f f f f f f . 
            . . . . . . . . . . f f f f . . 
            `)
        Spieler.vx = 60
        Spieler.vy = 70
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    if (Spieler.vy > 0 && Spieler.vx == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f 1 9 f 1 9 f . 
            . . . . . . . f f 1 1 f 1 1 f . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f . . . 
            `)
        Spieler.setVelocity(0, 20)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -1
    Startlevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    Currentlevel += 1
    Startlevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Decke1, function (sprite, otherSprite) {
    if (Wand_links == 1) {
        Spieler.vy = 30
    } else if (Wand_links == 0) {
        Spieler.vy = 30
    }
})
function Startlevel () {
    if (Richtung == 0) {
        Spieler.setVelocity(60, 0)
    } else if (Richtung == 1) {
        Spieler.setVelocity(-60, 0)
    }
    if (Currentlevel == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.SÄ1)
        tiles.setCurrentTilemap(tilemap`Level2`)
    } else if (Currentlevel == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.SÄ1)
        tiles.setCurrentTilemap(tilemap`Level3`)
    } else if (Currentlevel == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.SÄ1)
        tiles.setCurrentTilemap(tilemap`Level5`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Fliegehitbox)
        sprites.destroyAllSpritesOfKind(SpriteKind.Fliege)
        King = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . 5 . 5 6 5 . 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            8 8 8 8 . f f f f f f f . . . . 
            8 1 9 9 8 f f f f f f f f . . . 
            . 8 1 9 9 f f 1 9 f 1 9 f f . . 
            . . 8 1 9 f f 1 1 f 1 1 f f . . 
            . . . 8 1 f f f f f f f f f . . 
            . . . 8 1 f f f f f f f f f . . 
            . . . . 8 f f f f f f f f f . . 
            . . . . 8 f f f f f f f f f . . 
            `, SpriteKind.King)
        tiles.placeOnRandomTile(King, assets.tile`myTile57`)
        for (let value of tiles.getTilesByType(assets.tile`myTile57`)) {
            tiles.setTileAt(value, assets.tile`myTile20`)
        }
    } else {
        game.gameOver(true)
    }
    tiles.placeOnRandomTile(Spieler, assets.tile`tile6`)
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value, assets.tile`myTile20`)
    }
    scene.cameraFollowSprite(Spieler)
    tiles.placeOnRandomTile(Fliege, assets.tile`myTile42`)
    tiles.placeOnRandomTile(Fliege_Hitbox, assets.tile`myTile42`)
    for (let value of tiles.getTilesByType(assets.tile`myTile42`)) {
        tiles.setTileAt(value, assets.tile`myTile49`)
    }
    Fliege.follow(Spieler, 37)
    Fliege_Hitbox.follow(Fliege, 10000)
    tiles.placeOnRandomTile(Kanone1, assets.tile`myTile60`)
    for (let value of tiles.getTilesByType(assets.tile`myTile60`)) {
        tiles.setTileAt(value, assets.tile`myTile43`)
    }
    tiles.placeOnRandomTile(projectile, assets.tile`myTile60`)
    for (let value of tiles.getTilesByType(assets.tile`myTile60`)) {
        tiles.setTileAt(value, assets.tile`myTile43`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile51`)) {
        Sä1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . c a a a a b b c . . . . 
            . . . c a b b b b b b b c . . . 
            . . c b b b b b b b b a b c . . 
            . . c b b b b b b a a b b c . . 
            . . c b b b b c c a b b b c . . 
            . . c b b b a c c b b b b c . . 
            . . c b b a a b b b b b b c . . 
            . . c b a b b b b b b b b c . . 
            . . . c b b b b b b b b c . . . 
            . . . . c b b b b b b c . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.SÄ1)
        tiles.placeOnTile(Sä1, value)
        tiles.setTileAt(value, assets.tile`myTile16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile52`)) {
        Sä1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . c a a a a b b c . . . . 
            . . . c a b b b b b b b c . . . 
            . . c b b b b b b b b a b c . . 
            . . c b b b b b b a a b b c . . 
            . . c b b b b c c a b b b c . . 
            . . c b b b a c c b b b b c . . 
            . . c b b a a b b b b b b c . . 
            . . c b a b b b b b b b b c . . 
            . . . c b b b b b b b b c . . . 
            . . . . c b b b b b b c . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.SÄ1)
        tiles.placeOnTile(Sä1, value)
        tiles.setTileAt(value, assets.tile`myTile43`)
    }
}
let Sä1: Sprite = null
let projectile: Sprite = null
let King: Sprite = null
let Kanone1: Sprite = null
let Fliege_Hitbox: Sprite = null
let Fliege: Sprite = null
let statusbar: StatusBarSprite = null
let Spieler: Sprite = null
let Wand_links = 0
let Richtung = 0
let Currentlevel = 0
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666ffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666ffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666ffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666fffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666fffffff666666666666666666fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666fffffff6666666666666666ffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666ffffff6666666666666666ffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666fffffff6666666666666ffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666ffffff6666666666666ffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666ffffff666666666666ffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666ffffff66666666666ffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666fffff6666666666fffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666fffff6666666666ffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666fffff666666666ffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666ffffff6666666ffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666ffffff666666fffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666ffffff666666ffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff66666ffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff6666ffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff6666fffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff66fffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666ffffffffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666ffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666ffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666ffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666ffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffffffffffff6666666666666666666666666fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff6ffffffff66666666666666666666666fffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff66fffffff66666666666666666666666fffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff66ffffffff6666666666666666666666fffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff666ffffffff666666666666666666666fffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666fffff6666fffffff666666666666666666666fffffff6666666666666666666666666666666666666666666666666666666666655566666666666666666666666666666666666
    6666666666666666666fffff6666ffffffff666666666666666666666fffff66666666666666666666666666666666666666666666666666666666666655566666666666666666666666666666666666
    6666666666666666666fffff66666ffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666555566666666666666666666666666666666666
    6666666666666666666fffff66666ffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555556666666666666666666666666666666
    6666666666666666666fffff666666fffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555556666666666666666666666666666666
    666666666666666666ffffff6666666fffffff6666666666666666666fffff66666666666666666666666666666666666666666666666666666666555555555556666666666666666666666666666666
    666666666666666666ffffff66666666fffffff666666666666666666fffff66666666666666666666666666666666666666666666666666666665555555555555555666666666666666666666666666
    666666666666666666ffffff66666666fffffff666666666666666666fffff66666666666666666666666666666666666666666666666666666665555555555555555666666666666666666666666666
    666666666666666666ffffff66666666ffffffff6666666666666666fffffff666666666666666666666666666666666666666666666666666666f555555555555555666666666666666666666666666
    666666666666666666fffff6666666666fffffff6666666666666666fffffff6666666666666666ffffffff66666666666666666666666666666fff55555555555555666666666666666666666666666
    666666666666666666fffff6666666666fffffff666666666666666ffffffff66666666666666fffffffffffffffffffff6666666666666666fffffff555555555555555666666666666666666666666
    66666666666666666ffffff66666666666fffffff66666666666666ffffffff66666666666666fffffffffffffffffffffff666666666666ffffffffffff555555555555666666666666666666666666
    66666666666666666ffffff666666666666ffffff6666666666666fffffffff6666666666666ffffffffffffffffffffffff666666666fffffffffffffffff5555555556666666666666666666666666
    66666666666666666ffffff666666666666ffffff666666666666fffffffffff66666666666fffffffffffffffffffffffff66666666ffffffffffffffffffff55555666666666666666666666666666
    6666666666666666fffffff666666666666fffffff6666666666ffffffffffff66666666666fffffffffffffffffffffffff666666fffffffffffff66666fffff5556666666666666666666666666666
    6666666666666666ffffff66666666666666ffffff66666666fffffffffffffff66666666ffffffff66ffffffff6666fffff6666ffffffffffffff6666666fffff556666666666666666666666666666
    6666666666666666ffffff66666666666666fffffff666666ffffffffffffffff6666666ffffffff666ffffff6666666ffff666fffffffffffffff6666666fffff566666666666666666666666666666
    6666666666666666fffff666666666666666fffffff66666ffffffffff6ffffff666666fffffffff666ffffff6666666ffff6fffffffffffffffff6666666fffff666666666666666666666666666666
    666666666666666ffffff6666666666666666ffffff666fffffffffff666ffffff666ffffffffff6666fffff66666666ffffffffffffff66ffffff666666ffffff666666666666666666666666666666
    66666666666666fffffff6666666666666666fffffff66fffffffff66666ffffffffffffffffff66666fffff66666666ffffffffffffff66fffffff66666ffffff666666666666666666666666666666
    6666666666666ffffffff66666666666666666ffffffffffffffff6666666fffffffffffffffff66666fffff66666666ffffffffffff66666ffffffff6fffffffff66666666666666666666666666666
    666666666666fffffffff66666666666666666ffffffffffffffff6666666ffffffffffffffff666666fffff66666666fffffffffff666666ffffffffffffffffff66666666666666666666666666666
    66666666666fffffffff666666666666666666ffffffffffffff6666666666fffffffffffff66666666fffff66666666fffffffff666666666fffffffffffffffff66666666666666666666666666666
    66666666666fffffffff6666666666666666666fffffffffff6666666666666ffffffffff6666666666fffff66666666ffffffff66666666666ffffffffffffffff66666666666666666666666666666
    66666666666fffffff666666666666666666666ffffffffff6666666666666666666666666666666666fffff66666666fffffff6666666666666fffffffffffffff66666666666666666666666666666
    66666666666fffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffff66666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffff66666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffff66666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff666666666666666666666666666666ffffff66666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff6666666666666666666666666666666ffffff66666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff6666666666666666666666666666666ffffff666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666ffffffff6666666ffff6666666666666666666666666666666ffffff666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff66666ffff66666666666666666666666666666666ffffff666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffff6666ffff66666666666666666666666666666666ffffff666666666666666666666666666666
    66666666ffffff6666666666666666666666666666666666666666666666666666666666fff666666fff6666fff66666666666666666666666666666666fffffff666666666666666666666666666666
    66666666fffffffff666666666666666666666666666666666666666666666666666666fff66666666ff6666fff6666666666666666666666666666666ffffffff666666666666666666666666666666
    66666666ffffffffff6666666666666666666666666666666666666666666666666666fff666666666fff666fff666666666666666666666666666666ffffffff6666666666666666666666666666666
    66666666fffffffffffff6666666666666666666666666666666666666666666666666fff666666666fff6ffffffff66666666666666666666666666fffffffff6666666666666666666666666666666
    66666666ffffffffffffffff6666666666666666666666666666666666666666666666fff666666666fff6ffffffff666666666666666666666666ffffffffff66666666666666666666666666666666
    666666666fffffffffffffffff66666666666666666666666666666666666666666666fff666666666fff6ffffffff666666666666666666666666fffffffff666666666666666666666666666666666
    666666666fffffffffffffffff666666666666666666666666666666666666666666666fff66666666fff666fff6666666666666666666666666fffffffffff666666666666666666666666666666666
    6666666666ffffffffffffffffff6666666666666666666666666666666666666666666fff66666666ff6666fff66666666666666666666666ffffffffffff6666666666666666666666666666666666
    66666666666fffff6fffffffffff6666666666666666666666666666666666666666666ffff666666fff6666fff666666666666666666666fffffffffffff66666666666666666666666666666666666
    66666666666fffff6666ffffffff66666666666666666666666666666666666666666666ffff6666fff66666fff6666666666666666666fffffffffffff6666666666666666666666666666666666666
    66666666666fffff66666ffffffff66666666666666666666666666666666666666666666fffffffff666666fff6666666666666666ffffffffffffff666666666666666666666666666666666666666
    66666666666fffff666666ffffffff66666666666666666666666666666666666666666666ffffffff666666fff66666666666fffffffffffffffff66666666666666666666666666666666666666666
    66666666666fffff6666666ffffffff666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666
    66666666666ffffff666666ffffffff66666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666
    66666666666ffffff6666666fffffff666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666
    66666666666ffffff66666666fffffff666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666
    66666666666ffffff666666666ffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffff666666666ffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffff666666666ffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffff6666666666fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffff6666666666ffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666ffffff6666666666ffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666ffffff6666666666ffffff6666666ffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666fffffff6666666666ffffff6666666ffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666fffffff66666666666fffff666666fffff66666ffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666fffffff666666666666fffff666666fffff66666ffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666fffffff666666666666fffff666666fffff6666fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666ffffff6666666666666fffff6666fffffff6666fffff6666666666fff66666666666666666666fffff666666666666666666666666666666666666666666666666666666666666666666666
    666666666ffffff666666666666ffffff66fffffffff6666fffff666666666ffff6666fffff6666666666fffffff66666666666666666666666666666666666666666666666666666666666666666666
    66666666ffffff6666666666666ffffff6ffffffffff6666ffffff66666666ffff666fffffff666666666fffff6666666666666666666666666666666666666666666666666666666666666666666666
    66666666ffffff666666666666fffffffffffffffffff666ffffff66666666ffff666ffffffff66666666ffff66666666666666666666666666666666666666666666666666666666666666666666666
    66666666ffffff66666666666fffffffffffffffffffffffffffffff66666fffffffffffffffff6666666ffff66666ff6666666666666666666666666666666666666666666666666666666666666666
    66666666ffffff666666666ffffffffffffffffffffffffffffffffff6666fffffffffffffffff6666666ffff66666ff6666666666666666666666666666666666666666666666666666666666666666
    6666666ffffff666666ffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffff6666666fffff666fff6666666666666666666666666666666666666666666666666666666666666666
    6666666ffffff666ffffffffffffffffffffff66ffffffff6fffffffffffffffffffffffffffffff66666fffffffffff6666666666666666666666666666666666666666666666666666666666666666
    666666ffffffffffffffffffffffffffffffff666666666666ffffffffffffffffffff666fffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    66666ffffffffffffffffffffffffffffffff666666666666666ffffffffffffffff66666ffffffffffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666
    6666fffffffffffffffffffffffffffffff66666666666666666666ffffffffffff666666fffffffffffffffff666ffffffff66666666666666666666666666666666666666666666666666666666666
    6666fffffffffffffffffff666fffffff66666666666666666666666666666fffff666666fffffffffffffff66666ffffffff66666666666666666666666666666666666666666666666666666666666
    6666ffffffffffffffff666666666666666666666666666666666666666666fffff6666666ffffffffffffff66666ffffffff66666666666666666666666666666666666666666666666666666666666
    6666fffffffffffffff6666666666666666666666666666666666666666666fffff6666666ffff6666fffff666666fffff66666666666666666666666666666666666666666666666666666666666666
    6666ffffff6666666666666666666666666666666666666666666666666666fffff6666666ffff6666fffff666666fffff66666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666ffff6666ffff6666666ffff666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666ffff6666ffff6666666fff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff6666666ff66666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666fffff66666fff66666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666fffff6666ffff66666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
pause(2000)
game.setDialogFrame(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 9 9 9 9 9 9 9 9 9 9 9 6 6 
    6 6 9 9 9 9 9 9 9 9 9 9 9 6 6 
    6 6 9 9 1 1 1 1 1 1 1 9 9 6 6 
    6 6 9 9 1 1 1 1 1 1 1 9 9 6 6 
    6 6 9 9 1 1 1 1 1 1 1 9 9 6 6 
    6 6 9 9 1 1 1 1 1 1 1 9 9 6 6 
    6 6 9 9 1 1 1 1 1 1 1 9 9 6 6 
    6 6 9 9 1 1 1 1 1 1 1 9 9 6 6 
    6 6 9 9 1 1 1 1 1 1 1 9 9 6 6 
    6 6 9 9 9 9 9 9 9 9 9 9 9 6 6 
    6 6 9 9 9 9 9 9 9 9 9 9 9 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.showLongText("Jemand hat dir den Ort verraten,an dem sich der König aufhält.", DialogLayout.Center)
game.showLongText("Bezwinge alle Dungeons und besiege den König in einem epischen Kampf.", DialogLayout.Center)
game.showLongText("Halte dich jedoch von den Fallen und ihren Projektilen fern. ", DialogLayout.Center)
Currentlevel = 0
Richtung = 0
Wand_links = 0
Spieler = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f f f f f f . . 
    . . . . . . . f f f f f f f f . 
    . . . . . . . f f 1 9 f 1 9 f f 
    . . . . . . . f f 1 1 f 1 1 f f 
    . . . . . . . f f f f f f f f f 
    . . . . . . . f f f f f f f f f 
    . . . . . . . f f f f f f f f f 
    . . . . . . . f f f f f f f f f 
    `, SpriteKind.Player)
statusbar = statusbars.create(10, 2, StatusBarKind.Health)
statusbar.value = 3
statusbar.setColor(7, 7)
statusbar.attachToSprite(Spieler, -5, 3)
Spieler.ay = 500
Fliege = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . 1 . . . 8 8 8 8 8 8 8 . . . 1 
    . 1 1 1 . 8 8 1 1 1 8 8 . 1 1 1 
    . . 1 1 1 8 8 1 f 1 8 8 1 1 1 . 
    . . . . . 8 8 1 1 1 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . . c f f . . . . . . 
    . . . . . . . . c . . . . . . . 
    `, SpriteKind.Fliege)
animation.runImageAnimation(
Fliege,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . 1 . . . 8 8 8 8 8 8 8 . . . 1 
    . 1 1 1 . 8 8 1 1 1 8 8 . 1 1 1 
    . . 1 1 1 8 8 1 f 1 8 8 1 1 1 . 
    . . . . . 8 8 1 1 1 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . . c f f . . . . . . 
    . . . . . . . . c . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . 1 1 1 . 8 8 1 1 1 8 8 . 1 1 1 
    . . 1 1 1 8 8 1 f 1 8 8 1 1 1 . 
    . . . . . 8 8 1 1 1 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . . c f f . . . . . . 
    . . . . . . . . c . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 1 1 1 8 8 . . . . 
    . 1 1 1 1 8 8 1 f 1 8 8 1 1 1 1 
    . . 1 1 . 8 8 1 1 1 8 8 . 1 1 . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . . c f f . . . . . . 
    . . . . . . . . c . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 1 1 1 8 8 . . . . 
    . . 1 1 1 8 8 1 f 1 8 8 1 1 1 . 
    . 1 1 1 . 8 8 1 1 1 8 8 . 1 1 1 
    . 1 . . . 8 8 8 8 8 8 8 . . . 1 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . . c f f . . . . . . 
    . . . . . . . . c . . . . . . . 
    `],
100,
true
)
Fliege_Hitbox = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 . . . 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 . . . 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Fliegehitbox)
Kanone1 = sprites.create(img`
    . . . . . . . . . . . . . 5 . 5 
    . . . . . . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . 5 . 
    . . . . . . . . . . . . . f . 5 
    . . . . . . . . . . . . f . . . 
    . . b c c . . . . . . c c c . . 
    . c f b c c . . . . c b b b c . 
    . c f f b b c c c c b b b b b c 
    . c f f b b b b b b b b b b b c 
    . c f f b b c c c c b b b b b c 
    . c f b c c c . . . c b b b c . 
    . . b c c . . . . . . c c c . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Kanone)
game.onUpdate(function () {
    if (Spieler.vy < 0 && Spieler.vx > 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . f f f 1 9 f 1 9 f f 
            . . . . . f f f f 1 1 f 1 1 f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f . . . 
            `)
    } else if (Spieler.vy > 0 && Spieler.vx > 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f 1 9 f 1 9 f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . . . f f f f f f . 
            . . . . . . . . . . f f f f . . 
            `)
    } else if (Spieler.vy == 0 && Spieler.vx > 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f 1 9 f 1 9 f f 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            `)
    } else if (Spieler.vy == 0 && Spieler.vx == 0 && Wand_links == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . f f 
            . . . . . . . . . f f f f f f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . f f 9 1 f 9 1 f f 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            `)
        Spieler.setVelocity(0, 0)
    } else if (Spieler.vy > 0 && Spieler.vx == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . f f 
            . . . . . . . . . f f f f f f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . . f 9 1 f 9 1 f f 
            . . . . . . . . f 1 1 f 1 1 f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . . . f f f f f f f 
            . . . . . . . . . . f f f f f f 
            `)
        Spieler.setVelocity(0, 20)
    } else if (Spieler.vy < 0 && Spieler.vx == 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f f f . . 
            . . . . . . . . f f f f f f f . 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . . f f f f f f f . 
            . . . . . . . . . f f f f f . . 
            `)
    } else if (Spieler.vy < 0 && Spieler.vx < 0 && Spieler.isHittingTile(CollisionDirection.Bottom) == false) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . f f f f f f f f . . 
            . . . . . f f 9 1 f 9 1 f f f . 
            . . . . . f f 1 1 f 1 1 f f f f 
            . . . . . f f f f f f f f f . . 
            . . . . . . f f f f f f f f . . 
            . . . . . . . f f f f f f f . . 
            `)
    } else if (Spieler.vy > 0 && Spieler.vx < 0 && Spieler.isHittingTile(CollisionDirection.Bottom) == false) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . f f 
            . . . . . . . . . . f f f f f f 
            . . . . . . . . . f f f f f f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f 9 1 f 9 1 f f 
            . . . . . . . f f f f f f f f . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . f f f f . . . 
            `)
    } else if (Spieler.vy == 0 && Spieler.vx < 0) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . f f 
            . . . . . . . . . f f f f f f f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . f f 9 1 f 9 1 f f 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            `)
    } else if (Spieler.vy == 0 && Spieler.vx == 0 && Wand_links == 1) {
        Spieler.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f f f f f f . 
            . . . . . . . f f 1 9 f 1 9 f f 
            . . . . . . . f f 1 1 f 1 1 f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            . . . . . . . f f f f f f f f f 
            `)
    }
})
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 4 4 . . . . . . . . . . . . . 
        4 5 4 4 . . . . . . . . . . . . 
        4 4 5 4 . . . . . . . . . . . . 
        . 4 4 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Kanone1, -50, 0)
    pause(1500)
})
forever(function () {
    if (statusbar.value == 2) {
        statusbar.setColor(4, 4)
    } else if (statusbar.value == 1) {
        statusbar.setColor(2, 2)
    } else if (statusbar.value == 0) {
        game.gameOver(false)
        game.setGameOverEffect(false, effects.melt)
    }
})
