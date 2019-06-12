import java.lang.StringBuilder
import java.util.*
import kotlin.collections.ArrayList

class SetOfStacks(private val threshold: Int) {
    private val stacks: ArrayList<ArrayDeque<Int>> = ArrayList()
    private var currentStack: ArrayDeque<Int> = ArrayDeque(threshold)

    init {
        stacks.add(currentStack)
    }

    fun push(num: Int) {
        currentStack.push(num)
        if (currentStack.size == this.threshold) {
            currentStack = ArrayDeque(threshold)
            stacks.add(currentStack)
        }
    }

    fun pop(): Int {
        if (stacks.size == 1 && currentStack.size == 0) {
            throw NoSuchElementException()
        }
        if (currentStack.size == 0) {
            stacks.removeAt(stacks.size - 1)
            currentStack = stacks.get(stacks.size - 1)
        }
        return currentStack.pop()
    }

    override fun toString(): String {
        val builder = StringBuilder(stacks.size * this.threshold)
        for (stack in stacks) {
            builder.append("[")
            for (value in stack) {
                builder.append(value).append(",")
            }
            builder.append("]")
        }

        return builder.toString()
    }
}

fun main() {
    val stackOfPlates = SetOfStacks(3);
    stackOfPlates.push(1)
    stackOfPlates.push(2)
    stackOfPlates.push(3)
    stackOfPlates.push(4)
    stackOfPlates.push(5)
    stackOfPlates.push(6)
    stackOfPlates.push(7)
    stackOfPlates.push(8)
    stackOfPlates.push(9)
    stackOfPlates.push(10)
    stackOfPlates.push(11)
    stackOfPlates.push(12)
    stackOfPlates.push(13)

    print(stackOfPlates)
}