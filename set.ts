export default class mySet {
  private list: any[];

  constructor() {
    this.list = [];
  }

  public hasItem(item: any) {
    return this.list.indexOf(item) !== -1;
  }

  public items(): any[] {
    return this.list;
  }

  public add(item: any): any[] {
    if (!this.hasItem(item)) {
      this.list.push(item);
    }

    return this.list;
  }

  public remove(item: any): any[] {
    if (this.hasItem(item)) {
      const listIndex = this.list.indexOf(item);
      this.list.splice(listIndex, 1);
    }
    return this.list;
  }

  public length(): number {
    return this.list.length;
  }

  public union(otherSet: mySet): mySet {
    const combinedSet = new mySet();

    const currentSetVals = this.items();
    const otherSetVals = otherSet.items();

    currentSetVals.forEach((val) => combinedSet.add(val));
    otherSetVals.forEach((val) => combinedSet.add(val));

    return combinedSet;
  }

  public intersection(otherSet: mySet): mySet {
    const intersectionSet = new mySet();
    const currentSetVals = this.items();

    currentSetVals.forEach((val) => {
      if (otherSet.hasItem(val)) {
        intersectionSet.add(val);
      }
    });

    return intersectionSet;
  }

  public difference(otherSet: mySet): mySet {
    const differenceSet = new mySet();
    const currentSetVals = this.items();

    currentSetVals.forEach((val) => {
      if (!otherSet.hasItem(val)) {
        differenceSet.add(val);
      }
    });

    return differenceSet;
  }

  public isSubset(otherSet: mySet): boolean {
    const currentSetVals = this.items();
    return currentSetVals.every((val) => otherSet.hasItem(val));
  }
}
