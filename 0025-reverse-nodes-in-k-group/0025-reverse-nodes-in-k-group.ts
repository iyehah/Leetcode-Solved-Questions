/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return null;
    }

    const sentinel = new ListNode(undefined, head);
    let prev = sentinel;

    let tail = shift(head, k-1);

    while (tail) {
        const sublistHead = reverseSublist(head, tail);
        const sublistTail = shift(sublistHead, k-1);

        prev.next = sublistHead;
        prev = sublistTail;

        head = shift(sublistHead, k);
        tail = shift(head, k-1);
    }

    return sentinel.next;
};

function shift(p: ListNode | null, n: number): ListNode | null {
    for (let i = 0; i < n; i++) {
        p = p?.next ?? null;
    }
    return p;
}

function reverseSublist(head: ListNode, tail: ListNode): ListNode {
    let prev = tail.next;
    let curr = head;
    let next = head.next;

    const endNode = tail.next;

    while (curr !== endNode) {
        curr.next = prev;

        prev = curr;
        curr = next;
        next = next?.next;
    }

    return prev;
}