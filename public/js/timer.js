export default class Timer {
  constructor(deltaTime = 1 / 60) {
    let acumulatedTime = 0
    let lastTime = 0

    this.updateProxy = (time) => {
      acumulatedTime += (time - lastTime) / 1000

      while (acumulatedTime > deltaTime) {
        this.update(deltaTime)
        acumulatedTime -= deltaTime
      }
      lastTime = time
      this.enqueue()
    }
  }

  enqueue() {
    requestAnimationFrame(this.updateProxy)
  }

  start() {
    this.enqueue()
  }
}
