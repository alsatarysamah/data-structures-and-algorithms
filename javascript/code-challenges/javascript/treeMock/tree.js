const Queue = require("./queue");
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// min- max- sum-  sumOfLeave- isBST-  compare two tree  -merge two tree  -convert  -path
class BST {
  constructor() {
    this.root = null;
  }

  // insert(value) {
  //   let newNode = new Node(value);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   let curr = this.root;
  //   while (true) {
  //     if (value > curr.value) {
  //       if (!curr.right) {
  //         curr.right = newNode;
  //         return this;
  //       }
  //       curr = curr.right;
  //     } else if (value < curr.value) {
  //       if (!curr.left) {
  //         curr.left = newNode;
  //         return this;
  //       }
  //       curr = curr.left;
  //     }
  //   }
  // }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      } else {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      }
    }
  }
  search(value) {
    if (!this.root) return "empty tree";
    let curr = this.root;
    if (curr.value === value) return true;
    let isHere = false;
    //          10
    //   5        13
    // 2    7
    while (true) {
      if (value > curr.value) {
        if (curr.right === null) return false;
        if (curr.right.value === value) return true;
        curr = curr.right;
      } else if (value < curr.value) {
        if (curr.left === null) return false;
        if (curr.left.value === value) return true;
        curr = curr.left;
      }
    }
  }
  contains(value) {
    if (!this.root) return "empty tree";
    let curr = this.root,
      isHere = false;
    while (curr && !isHere) {
      if (value > curr.value) {
        curr = curr.right;
      } else if (value < curr.value) {
        curr = curr.left;
      } else {
        isHere = true;
      }
    }
    return isHere;
  }
  find(value) {
    let isHere = false;
    let curr = this.root;
    while (curr && !isHere ) {
      if (value > curr.value) {
        // if (curr.right.value === value) isHere = true;
        // else 
        curr = curr.right;
      } else if (value < curr.value)  {
        // if (curr.left.value === value) isHere = true;
        // else 
        curr = curr.left;
      }
      else{isHere=true}
    }
    return isHere;
  }
  // BFS() {
  //   if (this.root == null) return "empty tree";
  //   let visited = [];
  //   let queue = new Queue();
  //   let curr = this.root;
  //   queue.enqueue(curr)
  //   while (!queue.isEmpty()) {
  //     let node =queue.dequeue();
  //     visited.push(node.value);
  //     if (node.left) {
  //       queue.enqueue(node.left);
  //     }
  //     if (node.right) {
  //       queue.enqueue(node.right);
  //     }
  //   }
  //   return visited;
  // }
  BFS() {
    let arr = [];
    let node;
    let sum = 0;
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      node = queue.dequeue();
      arr.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
      // else {sum+=node.value}
    }
    return arr;
  }
  preOrder() {
    let arr = [];
    let sum = 0;
    let max = this.root.value;
    function traverse(node) {
      arr.push(node.value);
      if (node.left) {
        traverse(node.left);
        if (node.left.value > max) max = node.left.value;
      }
      if (node.right) {
        traverse(node.right);
        if (node.right.value > max) max = node.right.value;
      } else {
        sum += node.value;
      } //sum of leaves
    }
    traverse(this.root);
    // return sum;
    return arr;
    // return max;
  }
  //       10
  //   5        13
  //2     7    12

  //[10,5,2,7,13,12]
  //[2,5,7,10,12,13,20]
  inOrder() {
    let arr = [];
    let one, two;
    function traverse(node) {
      if (node.left) {
        // if(node.left.value>node.value)return false;
        traverse(node.left);
      }
      arr.push(node.value);
      // if (arr.length == 2 && arr[0] > arr[1]) return false;
      // else {
      //   arr.pop(), arr.pop();
      // }
      if (node.right) {
        // if(node.right.value<node.value)return false;
        traverse(node.right);
      }
    }
    traverse(this.root);
    // let arr2=arr.sort((a,b)=>a-b);
    //arr=[2,5,7,10,13]
    // if(arr2==arr)
    return arr;
    // return arr.sort((a,b)=>a-b)===arr;
  }

  //10
  //[2,7,5,12,15,13,10]
  //[2,7,5,12,15,13,10]
  postOrder() {
    let arr = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.value);
    }
    traverse(this.root);
    // return arr;
    return Math.floor(Math.log2(arr.length));
  }
  isBST(tree) {
    let arr = [];

    let isHere = true;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      arr.push(node.value);
      // console.log(arr[);

      if (arr.length >= 2 && arr[arr.length - 1] < arr[arr.length - 2]) {
        isHere = false;
      }

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return isHere;
    // return arr.sort((a,b)=>a-b)===arr;
  }
  //       10
  //   5          13
  //2     7    12   15

  path() {
    let arr = [];
    let sum = 0;
    function traverse(root, s) {
      // if (!root) return;

      s += root.value;
      if (root.left) traverse(root.left, s);
      if (root.right) traverse(root.right, s);
      if (!root.left && !root.right) {
        console.log({ s });
        sum += Number(s);
      }
    }
    traverse(this.root, " ");
    return sum;
  }
  convert() {
    function traverse(node) {
      let temp;
      if (node.left) {
        temp = node.right;
        node.right = node.left;
      }
      if (node.right) node.left = temp;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return this;
  }
  longestPath() {
    let arr = [];
    let max = 0;
    const traverse = (node, path, num) => {
      path += node.value;
      num++;
      if (node.left) traverse(node.left, path + "=>", num);
      if (node.right) traverse(node.right, path + "=>", num);
      if (!node.left && !node.right && num > max) {
        arr.push({ [path]: num });
        max = num;
      }
    };
    traverse(this.root, "", 0);
    // let max = Object.values(arr[0]);
    // arr.forEach((element) => {
    //   if (Object.values(element) > max) max =Object.values(element)
    //   ;
    // });

    // console.log(max);
    // console.log(arr);
    console.log(arr);

    return Object.keys(arr[arr.length - 1]);
  }
}
function merge(tree1, tree2) {
  function traverse(node) {
    tree1.insert(node.value);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(tree2.root);
  return tree1;
}
function compare(tree1, tree2) {
  let arr1 = [],
    arr2 = [];

  function traverse(node) {
    arr1.push(node);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(tree2.root);
  arr2 = arr1;
  arr1 = [];

  traverse(tree1.root);
  console.log({ arr1 });
  console.log({ arr2 });
  return arr1.toString() === arr2.toString();
}
let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(7);
bst.insert(2);
bst.insert(15);
bst.insert(12);
bst.insert(4);
bst.insert(8);

let bst2 = new BST();
bst2.insert(1);
bst2.insert(155);
bst2.insert(113);
bst2.insert(17);
bst2.insert(120);
bst2.insert(175);
bst2.insert(112);

// console.log(bst.contains(2));
// console.log(bst.BFS());
// console.log(bst.preOrder());
// let arr=[1,2,5,9]
// console.log(Math.max.apply(null,arr));
// console.log(bst.inOrder());
// console.log(bst.postOrder());
// console.log(bst.isBST());
// console.log(merge(bst, bst2));
console.log(bst.inOrder());
// console.log(compare(bst, bst2));
// console.log(bst.path());
// console.log(bst.preOrder());

// console.log(bst.convert().preOrder());
// console.log(bst.longestPath());
console.log(bst.find(111));
