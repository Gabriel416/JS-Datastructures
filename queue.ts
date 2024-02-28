export default class Queue {
  private list: any[];
  constructor() {
    this.list = [];
  }

  public enqueue(elem: any) {
    this.list.push(elem);
  }

  public dequeue() {
    if (this.list.length === 0) {
      return;
    }
    this.list.shift();
  }

  public length(): number {
    return this.list.length;
  }

  public front() {
    return this.list[0];
  }

  public last() {
    return this.list[this.list.length - 1];
  }
}
