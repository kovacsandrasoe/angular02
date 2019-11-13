export class Villain {
  public name: string;
  public url: string;
  public level: number;

  constructor(n: HTMLInputElement, u: HTMLInputElement,
              l: HTMLInputElement) {
    this.name = n.value;
    this.url = u.value;
    this.level = parseInt(l.value, 0);
  }
}
