export class Note {

  constructor(
    public id: number = 0,
    public content: string = ""
  ) {}

  toString(): string {
    return JSON.stringify(this)
  }
}