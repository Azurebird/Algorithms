package StacksQueues

import java.util.*

class Queue {
    private val queue = ArrayDeque<Int>()
    private val stack = ArrayDeque<Int>()

    fun push(item: Int) {
        stack.push(item)
    }

    fun pop(): Int {
        if(queue.size == 0) {
            fillQueue()
        }
        return queue.pop()
    }

    private fun fillQueue() {
        while(stack.size != 0) {
            queue.push(stack.pop())
        }
    }
}

fun main() {
    val queue = Queue()
    queue.push(1)
    queue.push(2)
    queue.push(3)
    queue.push(4)
    queue.push(5)
    println(queue.pop())
    println(queue.pop())
    queue.push(6)
    queue.push(7)
    println(queue.pop())
    println(queue.pop())
    println(queue.pop())
    println(queue.pop())
    println(queue.pop())
}