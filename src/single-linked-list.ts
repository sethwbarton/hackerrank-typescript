export class SingleLinkedList<T> {
    private head?: Node<T>;

    constructor(items: T[]) {
        this.head = undefined;

        if (items[0]) this.head = new Node(items[0])
        let prev = this.head
        for (let i = 0; i < items.length; i++) {
            if (items[i + 1]) {
                let next = new Node(items[i+1])
                prev?.setNext(next)
                prev = next;
            }
        }
    }

    /**
     * True if the linked list is empty, false otherwise.
     * */
    isEmpty(): boolean {
        return !this.head
    }

    /**
     * Clears the list.
     *
     * Do we know when garbage disposal happens? If there's no reference to an object, does TS automatically clean it up?
     * */
    clear(): void {
       this.head = undefined
    }


    /**
     * This does what you expect. Returns the object as a list of space-separated items.
     * */
    toString(): string {
        let stringifiedList = ''
        let currentNode = this.head
       while(currentNode) {
            if (typeof currentNode.getValue()['toString'] === 'function') {
                stringifiedList += currentNode.getValue().toString()
            }
           currentNode = currentNode.getNext()
       }
       return stringifiedList
    }
}

class Node<T> {
    private next: Node<T> | undefined;
    private value: T;

    constructor(value: T, next?: Node<T>) {
        this.value = value
        if (next) {
            this.next = next;
        } else {
            this.next = undefined;
        }
    }

    getValue() {
        return this.value
    }

    setValue(newValue: T) {
        this.value = newValue
    }

    getNext() {
        return this?.next
    }

    setNext(newNext: Node<T>) {
        this.next = newNext
    }
}