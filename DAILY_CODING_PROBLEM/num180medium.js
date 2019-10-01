/*
Problem #180[Medium]

This problem was asked by Google.

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push or pop from a stack, and enqueue or dequeue from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].
*/

const reverseWeave = (s) => {
  let l = s.length - 1;
  let q = [];
  while (l > 1) {
    for(let i = 0 ; i < l ; i++) q.push(s.pop());
    for(let i = 0 ; i < l ; i++) s.push(q.shift());
    l--;
  }
  return s;
}

console.log(reverseWeave([1, 2, 3, 4]))
