// Push each node.val in q to the level array
// During that, push each node.child to the nextQ
// Once the queue is empty: push level to result and reset,
//spread nextQ into q and reset.

var levelOrder = function(root) {
    if (!root) return [];
    let result = [];
    let level = [];
    let q = [root];
    let nextQ = [];
    while(q.length){
        while(q.length){
            let node = q.shift();
            level.push(node.val);
            if (node.left) nextQ.push(node.left);
            if (node.right) nextQ.push(node.right);
        }
        result.push(level);
        level = [];
        q = nextQ;
        nextQ = [];
    }
    
    return result;

};