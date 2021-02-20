export default
class BackgroundCreator {
  dual: boolean
  color: string
  color2?: string

  private constructor(dual: boolean, color: string, color2?: string) {
    this.dual = dual
    this.color = color
    this.color2 = color2
  }

  get() {
    return this.dual
      ? `linear-gradient(90deg, ${this.color} 0%, ${this.color2} 100%)`
      : this.color
  }


  static mono(color: string) {
    return new BackgroundCreator(false, color)
  }
  static dual(color: string, color2: string) {
    return new BackgroundCreator(true, color, color2)
  }
}
