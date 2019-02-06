function isListPalindrome(l) {
    //if the list is empty, it is a palindrome
    if (!l) return true;
    //find the halfway node using 2 runners, one runner increments by one, the other increments by two until the second runner cannot increment by two
    let runner1 = l;
    let runner2 = l;
    
    while (runner2.next && runner2.next.next) {
        runner1 = runner1.next;
        runner2 = runner2.next.next;
    }
    
    
    //reverse everything after the first runner
    function reverseList(list) {
        let prev = null;
        let curr = list;
        let next = null;
        while (curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    };
    
    let r = reverseList(runner1.next);
    
    runner1 = l;
    runner2 = r;
    
    //while(secondRunner) check if firstRunner.value === secondRunner.value
    while(runner2) {
        if (runner1.value !== runner2.value) return false;
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
        
    return true;
    
}