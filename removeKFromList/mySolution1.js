function removeKFromList(l, k) {
    let lastNode = null;
    let currentNode = l;
    
    //loop through all items in the linked list
    while (currentNode) {
        //if thisNode.value === k and there is a last node, set the last node's next equal to this node's next
        if (currentNode.value === k) {
            if (lastNode) {
                lastNode.next = currentNode.next;
                currentNode = currentNode.next;
            }
            else {
                currentNode = currentNode.next;
                l = currentNode;
            }
        }
        //otherwise, just move lastNode and currentNode up one position
        else {
            lastNode = currentNode;
            currentNode = lastNode.next;
        }
    }
    
    return l;
}