// Linked List Implementation
export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // EASY: Append a value to the end of the list
  append(value: number): void {
    let node = this.head;
    if (node === null) {
      this.head = new ListNode(value);
      return;
    }

    //as long as there is a next we keep iterating
    while (node.next) {
      node = node.next;
    }
    //once next is null we found the end and can append a value
    if (node) node.next = new ListNode(value);
  }

  // EASY: Find a value in the list
  find(value: number): boolean {
    let node = this.head;
    if (node === null) {
      return false;
    }

    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  // MEDIUM: Reverse the linked list
  reverse(): void {
    const stack: ListNode[] = [];

    let node = this.head;
    if (node === null) {
      return;
    }
    //add the entire list to the stack
    while (node != null) {
      stack.push(node);
      node = node.next;
    }

    //keep taking from the back of the array
    this.head = stack.pop()!;
    node = this.head;
    while (node != null) {
      let nextNode = stack[stack.length - 1]; //get last element

      node.next = nextNode;
      node = stack.pop()!;
    }
  }

  // MEDIUM: Remove a node by value
  remove(value: number): void {
    let node = this.head?.next;
    let previous = this.head;

    //empty list
    if (node === null) {
      return;
    }

    //iterate list
    while (node) {
      //if we have value that we want to remove
      if (node.value === value) {
        //check if we have a previous node and set that nodes
        //next to the node after the node we want to delete
        if (previous != null) previous.next = node.next;
        return;
      }
      previous = node;
      node = node.next;
    }
  }

  print() {
    console.log("\nPRINTING:\n");
    let node = this.head;
    if (node === null) {
      return;
    }
    //add the entire list to the stack
    while (node != null) {
      console.log(node.value);
      node = node.next;
    }
    console.log("\nDONE PRINTING:\n");
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Linked List Find 3:", linkedList.find(3)); // Expected: true
linkedList.print();
linkedList.reverse();
linkedList.print();
console.log("Linked List Reversed Find 3:", linkedList.find(3)); // Expected: true
linkedList.remove(3);
console.log("Linked List Find 3 After Removal:", linkedList.find(3)); // Expected: false
