const { root: bst } = require("./tree");
// var lowestCommonAncestor = function (root, p, q) {
//   if (p > root.val && q > root.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   }
//   if (p < root.val && q < root.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }
//   return root.val;
// };

var lowestCommonAncestor = function (root, p, q) {
  if (p > root.val && q > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (p < root.val && q < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root.val;
};

// console.log(lowestCommonAncestor(bst.root, 2, 8));
// console.log(lowestCommonAncestor(bst.root, 3, 5));
// console.log(lowestCommonAncestor(bst.root, 2, 4));
console.log(lowestCommonAncestor(bst.root, 7, 8));

"1", "2", "2", "3", "", "", "3", "4", "", "", "4";
