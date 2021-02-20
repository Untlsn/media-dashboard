export default
class Background {
  private readonly _off: string
  private readonly _on?: string

  protected constructor(arg1: string, arg2?: string) {
    this._off = arg1
    this._on = arg2
  }

  get off() { return this._off }
  get on() { return this._on ?? this._off }

  static mono(always: string) {
    return new Background(always)
  }
  static dual(off: string, on: string) {
    return new Background(off, on)
  }
}

