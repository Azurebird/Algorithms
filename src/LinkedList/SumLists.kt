
fun sumLists(numberOne: LinkedList<Int>, numberTwo: LinkedList<Int>): LinkedList<Int> {
    var nodeOne: LinkedListNode<Int>? = numberOne.get(0)
    var nodeTwo: LinkedListNode<Int>? = numberTwo.get(0)
    val result: LinkedList<Int> = LinkedList()

    var carrier = 0
    while (nodeOne != null && nodeTwo != null) {
        val sum = nodeOne.getValue() + nodeTwo.getValue()
        result.add((sum % 10) + carrier)
        carrier = if(sum >= 10) 1 else 0
        nodeOne = nodeOne.getNext()
        nodeTwo = nodeTwo.getNext()
    }
    while (nodeOne != null) {
        result.add(nodeOne.getValue() + carrier)
        carrier = 0
        nodeOne = nodeOne.getNext()
    }
    while (nodeTwo != null) {
        result.add(nodeTwo.getValue() + carrier)
        carrier = 0
        nodeTwo = nodeTwo.getNext()
    }
    if (carrier != 0) {
        result.add(carrier)
    }
    return result
}

fun main(args : Array<String>) {

    val numberOne = LinkedList<Int>()
    numberOne.add(7)
    numberOne.add(1)
    numberOne.add(6)
    val numberTwo = LinkedList<Int>()
    numberTwo.add(5)
    numberTwo.add(9)
    numberTwo.add(2)

    val result = sumLists(numberOne, numberTwo);
    print(result)
}
