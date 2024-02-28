class Node {
  public data: number;
  public left: Node | null;
  public right: Node | null;
  constructor(data: number, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export default class BinarySearchTree {
  private root: Node | null;

  constructor() {
    this.root = null;
  }

  public add(data: number) {
    const node = this.root;
    if (node === null) {
      const newRoot = new Node(data);
      this.root = newRoot;
      return;
    }
    const searchTree = (node: Node) => {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        } else if (node.left !== null) {
          searchTree(node.left);
        }
      }

      if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        } else if (node.right !== null) {
          searchTree(node.right);
        }
      }
    };

    searchTree(node);
    return this.root;
  }

  public findMin(): number | null {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  public findMax(): number | null {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  public isPresent(data: number): boolean {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return false;
      }
    }

    return false;
  }

  public find(data: number): Node | null {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return null;
      }
    }

    return null;
  }

  public remove(data: number) {
    const removeNode = (node: Node | null, data: number) => {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        //node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      return null;
    };

    this.root = removeNode(this.root, data);
  }
}
