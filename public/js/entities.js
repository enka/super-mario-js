import Entity from './entity.js'
import Jump from './traits/jump.js'
import Velocity from './traits/velocity.js'
import { loadMarioSprite } from './sprites.js'

export function createMario() {
  return loadMarioSprite().then((sprites) => {
    const mario = new Entity()

    mario.addTrait(new Jump())
    mario.addTrait(new Velocity())

    mario.draw = function drawMario(context) {
      sprites.draw('idle', context, this.pos.x, this.pos.y)
    }
    return mario
  })
}
