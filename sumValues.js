const { Tree, createTestTree } = require('./tree');

/* Given a n-ary tree of integers, return the sum of all the integers. */

function sumValues(current, sum = 0) {
  //
  //add the current value to sum
  sum += current.val;

  //if the node has children search them
  if (current.children.length > 0) {
    //
    // for each child, recurse while passing the sum
    for (let child of current.children) {
      sum = sumValues(child, sum);
    }
  }
  return sum;
}

//testing
let tree = new Tree();
createTestTree(tree);

sumValues(tree.root);
