package TreesAndGraphs

fun main() {
    val treeNode = TreeNode()
    val list = ArrayList<Int>()

    list.add(1)
    list.add(2)
    list.add(3)
    list.add(4)

    treeNode.fromArray(list)

    treeNode.print()
}