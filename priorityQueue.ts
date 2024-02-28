export default class PriorityQueue {
  private list: [any, number][];

  constructor() {
    this.list = [];
  }

  public enqueue(elem: [any, number]) {
    if (!this.list.length) {
      this.list.push(elem);
    } else {
      let added = false;
      for (let i = 0; i < this.list.length; i++) {
        const [data, prio] = elem;
        const [_, listPrio] = this.list[i];

        if (prio < listPrio) {
          this.list.splice(i, 0, elem);
          added = true;
          break;
        }
      }
      if (!added) {
        this.list.push(elem);
      }
    }
  }

  public dequeue() {
    if (!this.list.length) {
      return;
    }

    const val = this.list.shift();
    return val;
  }

  public front() {
    return this.list[0];
  }

  public last() {
    return this.list[this.list.length - 1];
  }
}
