//iterative
var postorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    let stack = [];
    let current = root;
    do {
        while(current){
            if (current.right) stack.push(current.right);
            stack.push(current);
            current = current.left ? current.left : null;        
        }
        current = stack.pop();
        if (current.right && current.right === stack[stack.length-1]){
            stack.pop();
            stack.push(current);
            current = current.right;
        }
        else {
            result.push(current.val);
            current = null;
        }
    } while(stack.length);
    
    return result;
};

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