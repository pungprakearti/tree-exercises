const { Tree, createTestTree } = require('./tree');

/* Given a n-ary tree of integers, return the count of all the even integers. */

function countEvens(current, count = 0) {
  //
  //check if even. If so, add to count
  if (current.val % 2 === 0) count++;

  //if there are children, check them
  if (current.children.length > 0) {
    for (let child of current.children) {
      //
      //recurse with current count to get new count
      count = countEvens(child, count);
    }
  }
  return count;
}

//testing
let tree = new Tree();
createTestTree(tree);

countEvens(tree.root);
