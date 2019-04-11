//iterative
var inorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    let stack = [];
    let current = root;
    while (true){
        while (current){
            stack.push(current);
            current = current.left;
        }
        if (stack.length) {
            let popped = stack.pop();
            result.push(popped.val);
            current = popped.right;
        }
        else break;
    }
    return result;
};

//recursive
var inorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    let helper = (node) => {
        if (node.left) helper(node.left);
        result.push(node.val);
        if (node.right) helper(node.right);
    }
    helper(root);
    return result;
};