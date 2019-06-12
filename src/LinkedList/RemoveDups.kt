
fun <K> removeDuplicates(list: LinkedList<K>) {
    val map = HashMap<K?, Int>()
    var i = 0
    while (i < list.getSize()) {
        val value: K? = list.getValueAt(i)
        if (map.contains(value)) {
            list.remove(i)
            i--
        } else {
            map[value] = 1
        }
        i++
    }
}

fun main(args : Array<String>) {

    val list = LinkedList<String>()
    list.add("1")
    list.add("2")
    list.add("3")
    list.add("3")
    list.add("3")
    list.add("4")
    list.add("4")
    list.add("3")
    list.add("1")
    println(list)
    removeDuplicates(list)
    print(list)
}
