import java.lang.IndexOutOfBoundsException
import java.lang.StringBuilder

class LinkedList<K> {

    private var root: LinkedListNode<K>? = null
    private var last: LinkedListNode<K>? = null
    private var size: Int = 0

    fun add(value: K) {
        val newNode = LinkedListNode(value)
        if (this.root == null) {
            this.root = newNode
            this.last = this.root
        } else {
            this.last?.append(newNode)
            this.last = newNode
        }
        this.size++;
    }

    fun remove(pos: Int) {
        val previousNode: LinkedListNode<K>? = get(pos - 1)
        val nodeToRemove = previousNode?.getNext()
        previousNode?.append(nodeToRemove?.getNext())
        nodeToRemove?.append(null)
        this.size--
    }

    fun getSize(): Int {
        return this.size
    }

    fun getValueAt(pos: Int): K? {
        val node = get(pos)
        return node?.getValue()
    }

    override fun toString(): String {
        val builder = StringBuilder(this.size * 3)
        var node: LinkedListNode<K>? = this.root
        for (i in 1..this.size) {
            builder.append(node.toString()).append("->")
            node = node?.getNext()
        }
        return builder.toString()
    }

    fun get(pos: Int): LinkedListNode<K>? {
        if (pos > this.size) {
            throw IndexOutOfBoundsException()
        }
        var node: LinkedListNode<K>? = this.root
        for (i in 1..pos) node = node?.getNext()
        return node
    }
}


class LinkedListNode<K> (private val value: K) {
    private var next: LinkedListNode<K>? = null

    fun getNext(): LinkedListNode<K>? {
        return this.next
    }

    fun append(node: LinkedListNode<K>?) {
        next = node
    }

    fun getValue(): K {
        return this.value
    }

    override fun toString(): String {
        return this.value.toString()
    }
}