class Tree {
  constructor(root = '') {
    this.root = root;
  }

  print(current = this.root) {
    console.log(current);
    if (current.children.length > 0) {
      for (let child of current.children) {
        this.print(child);
      }
    }
  }

  find(val, current = this.root) {
    //
    //if matches, return node
    if (current.val === val) {
      return current;
    } else {
      //
      //if doesn't match, but has children, check them
      if (current.children.length > 0) {
        //
        //loop through children
        for (let child of current.children) {
          //
          //recurse
          let out = this.find(val, child);

          //base case - if return is valid, return node
          if (out) return out;
        }
      } else {
        //
        //no children and not a match
        return false;
      }
    }
  }

  append(val, parentVal = '') {
    //
    //create root
    if (!parentVal) {
      let node = new Node(val);
      this.root = node;

      //create and append new node
    } else {
      let node = new Node(val);
      this.find(parentVal).children.push(node);
    }
  }
}

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

/************************************************/
//test tree
let tree = new Tree();

tree.append(5);
tree.append(1, 5);
tree.append(3, 5);
tree.append(7, 5);
tree.append(4, 1);
tree.append(2, 1);
tree.append(9, 1);
tree.append(8, 3);
tree.append(6, 7);
tree.append(12, 4);
tree.append(13, 4);
tree.append(10, 8);
tree.append(11, 8);
tree.append(14, 11);

tree.print();
