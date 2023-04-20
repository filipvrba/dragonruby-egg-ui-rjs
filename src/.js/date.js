export default class Time {
  static unix() {
    return Math.floor(Date.now() / 1_000)
  }
}