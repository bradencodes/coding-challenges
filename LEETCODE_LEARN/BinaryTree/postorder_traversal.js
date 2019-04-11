//recursive
var postorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    let helper = (node) => {
        if(node.left) helper(node.left);
        if(node.right) helper(node.right);
        result.push(node.val);
    }
    helper(root);
    return result;
};