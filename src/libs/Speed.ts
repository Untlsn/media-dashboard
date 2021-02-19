export default
class Speed {
  unit: 'ms' | 's'
  val: number

  private constructor(unit: 'ms' | 's', val: number) {
    this.unit = unit
    this.val = val
  }

  toString() {
    return `${this.val}${this.unit}`
  }

  static fromMs(ms: number) {
    return new Speed('ms', ms)
  }
  static fromSec(sec: number) {
    return new Speed('s', sec)
  }
}
