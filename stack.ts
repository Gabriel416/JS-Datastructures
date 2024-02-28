export default class Stack {
  private count: number;
  private elements: {
    [key: number]: any;
  };
  constructor() {
    this.count = 0;
    this.elements = {};
  }

  public push(elem: any) {
    this.elements[this.count] = elem;
    this.count++;
    return elem;
  }

  public pop(): any {
    if (this.count === 0) {
      return;
    }
    this.count--;
    const retrieved = this.elements[this.count];
    delete this.elements[this.count];

    return retrieved;
  }

  public peek(): any {
    return this.elements[this.count - 1];
  }

  public length(): number {
    return this.count;
  }
}
