//iterative
var preorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    let stack = [root];
    while(stack.length) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
};

//recursive
var preorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    let helper = (node) => {
        result.push(node.val);
        if (node.left) helper(node.left);
        if (node.right) helper(node.right);
    }
    return result;
};
